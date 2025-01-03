import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-message',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home-message.component.html',
  styleUrl: './home-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMessageComponent {
  }


