import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../interfaces/user.interface';
import { catchError, map, Observable, Subscription } from 'rxjs';
import { AppService } from '../../../../services/app.service';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnDestroy {

  private credentialsSubscription?: Subscription;

  public isInputEmailWritten = signal(false);
  public isInputPasswordWritten = signal(false);

  public errorsForm = signal('');
  public isABadRequest = signal(false);

  public loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]]
  });


  constructor(
    private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService,
    private http: HttpClient,
    private appService: AppService
  ){}


  ngOnDestroy(): void {
    if( this.credentialsSubscription ){
      this.credentialsSubscription.unsubscribe();
    }
  }


  verifyNoEmptyFields( event:Event, inputType: string ){
    const input = event.target as HTMLInputElement;
    const isInputWritten = input.value.length != 0;

    if( isInputWritten ){
      inputType === 'email'
        ? this.isInputEmailWritten.set(true)
        : this.isInputPasswordWritten.set(true)
    } else {
      inputType === 'email'
        ? this.isInputEmailWritten.set(false)
        : this.isInputPasswordWritten.set(false)
    }

    this.checkValidForm();
  }

  submitForm(){
    const isFormValid = this.checkValidForm();

    if ( isFormValid ){

      const user: User = {
        email    : this.loginForm.controls['email'].value,
        password : this.loginForm.controls['password'].value
      }

      this.loginService.isLoginLoading.set(true)
      this.credentialsSubscription = this.checkCredentials( user )
        .pipe(
          catchError( err => {
            this.loginService.isLoginLoading.set(false);
            let error = err.error.error;
            error = ( error === 'user not found') ? 'Usuario no encontrado' : error;
            this.errorsForm.set(error.toUpperCase());
            this.isABadRequest.set(true);

            throw new Error(error);
          }),
          map( resp =>  <{ token: string }>resp)
        )
        .subscribe( resp => {
          this.loginService.isLoginLoading.set(false);
          this.appService.isAValidUser.set(true);
          this.appService.userToken.set(resp.token)
          this.router.navigateByUrl('/home');
        } );
    }
  }

  checkValidForm(): boolean{
    const emailErrors = this.loginForm.controls['email'].errors;
    const passwordErrors = this.loginForm.controls['password'].errors;

    if( emailErrors ){
      this.errorsForm.set('Email no valido o requerido.')
      return false;
    } else if( passwordErrors ){
      this.errorsForm.set('El password requiere almenos 4 caracteres.');
      return false
    }
    return true;
  }

  checkCredentials( user?: User ): Observable<Object>{
    const endpoint = 'https://reqres.in/api/login';
    const body = JSON.stringify(user);
    return this.http.post(
      endpoint,
      body,
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

}
