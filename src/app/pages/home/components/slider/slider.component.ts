import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {


}
