import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

// import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import SwiperCore from 'swiper';
import  { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);


@Component({
  selector: 'app-carousel',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    // console.log('implemented')
  }

  public slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

  public swiperModules = [Navigation, Pagination, EffectCoverflow];

}
