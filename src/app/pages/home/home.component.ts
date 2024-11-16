import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent, CardsComponent, HomeMessageComponent, OurServicesComponent } from './components/index';
import { filter, Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    HomeMessageComponent,
    CardsComponent,
    OurServicesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  public currentPath = signal('');
  private pathSubscription?: Subscription;


  constructor( private router: Router ){}


  ngOnDestroy(): void {
    if( this.pathSubscription ){
      this.pathSubscription.unsubscribe();
    }
  }


  ngOnInit(): void {
    this.pathSubscription = this.router.events
      .pipe(
        filter( event => event instanceof NavigationEnd )
      )
      .subscribe( e =>  {
        console.log(this.router.url)
        this.currentPath.set( this.router.url);
    });

    this.currentPath.set( this.router.url);
  }

}
