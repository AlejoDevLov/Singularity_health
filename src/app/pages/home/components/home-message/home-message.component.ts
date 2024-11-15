import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-message',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home-message.component.html',
  styleUrl: './home-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMessageComponent { }
