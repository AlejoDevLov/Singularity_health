import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ourServices.component.html',
  styleUrl: './ourServices.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServicesComponent { }
