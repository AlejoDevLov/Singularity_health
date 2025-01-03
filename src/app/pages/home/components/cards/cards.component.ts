import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {

  @Input()
  public imageUrl!: string;

  @Input()
  public text!: string;

  @Input()
  public alt!: string;

}
