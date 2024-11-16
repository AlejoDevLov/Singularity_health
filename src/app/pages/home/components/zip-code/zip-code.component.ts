import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-zip-code',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './zip-code.component.html',
  styleUrl: './zip-code.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZipCodeComponent {

  @Input()
  public title!: string;

  @Input()
  public text!: string;

  @Input()
  public subtitle!: string;
}
