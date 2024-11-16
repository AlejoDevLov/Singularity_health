import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-now',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './join-now.component.html',
  styleUrl: './join-now.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinNowComponent { }
