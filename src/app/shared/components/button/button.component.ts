import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [CommonModule,
    IconComponent
  ],
})
export class ButtonComponent {

  @Input()
  variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  @Input()
  icon?: string;

  @Input()
  type: 'button' | 'submit' = 'button';

  @Input()
  disabled = false;

}