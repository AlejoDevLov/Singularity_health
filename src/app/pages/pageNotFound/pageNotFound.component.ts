import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './pageNotFound.component.html',
  styleUrl: './pageNotFound.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent { }
