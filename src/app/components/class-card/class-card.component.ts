import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent {
  @Input() imgSrc = '';
  @Input() name = 'Default';
  @Input() description = 'Default';
  @Input() minutesDuration = '00';
  @Input() date = '00/00/00';
}
