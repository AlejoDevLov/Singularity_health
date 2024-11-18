import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';
// import Swiper from 'swiper';



@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarouselComponent implements OnInit {

  @ViewChild('swiper')
  private swiper!:ElementRef<SwiperContainer>;

  ngOnInit(): void {

  }

  onNext(){
    if ( !this.swiper ) return;
    console.log(this.swiper.nativeElement.swiper.slideNext())
  }

  onPrev(){
    if ( !this.swiper ) return;
    console.log(this.swiper.nativeElement.swiper.slidePrev())
  }
}
