import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent
],
  templateUrl: './login-page.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  public showSpinner = computed( () => this.loginService.isLoginLoading() );

  constructor( private loginService: LoginService ){}

 }
