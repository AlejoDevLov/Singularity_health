import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent, CardsComponent, HomeMessageComponent,
        ZipCodeComponent,JoinNowComponent, FooterComponent, CarouselComponent,
        ThirdSectionCardsComponent } from './components/index';
import { filter, Subscription } from 'rxjs';
import { CardData } from './interfaces';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    HomeMessageComponent,
    CardsComponent,
    ZipCodeComponent,
    ThirdSectionCardsComponent,
    JoinNowComponent,
    FooterComponent,
    CarouselComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private pathSubscription?: Subscription;

  public currentPath = signal('');
  public secondSectionCardsData: CardData[] = [
    { imageUrl: '../../../../../assets/perro.png', text: 'Dog Walking', alt: 'dog-icon' },
    { imageUrl: '../../../../../assets/gato.png', text: 'Pet Sitting', alt: 'cat-icon' },
    { imageUrl: '../../../../../assets/casa-de-perro.png', text: 'Overnight Care', alt: 'dog-house-icon' },
    { imageUrl: '../../../../../assets/huella.png', text: 'Other Services', alt: 'footprint-icon' },
  ];


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
