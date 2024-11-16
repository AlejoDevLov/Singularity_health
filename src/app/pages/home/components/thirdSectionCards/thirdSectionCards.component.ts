import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardData } from '../../interfaces';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-third-section-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardsComponent
  ],
  templateUrl: './thirdSectionCards.component.html',
  styleUrl: './thirdSectionCards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdSectionCardsComponent {

  public thirdSectionCardsData: CardData[] = [
    { imageUrl: '../../../../../assets/calendario.png', text: 'Reserve', alt: 'calendar-icon' },
    { imageUrl: '../../../../../assets/mascota.png', text: 'Match', alt: 'pet-icon' },
    { imageUrl: '../../../../../assets/relax.png', text: 'Relax', alt: 'dog-relaxed-icon' },
  ];

}
