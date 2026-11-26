import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule,
    IconComponent
  ],
})
export class CardComponent {


  @Input()
  title?: string;


  @Input()
  icon?: string;


  @Input()
  variant: 'default' | 'highlight' = 'default';

}