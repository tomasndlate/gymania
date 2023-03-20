import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {

  @Input() imageSrc = '';
  @Input() topic = 'Default';
  @Input() title = 'Default';
  @Input() description = 'Default';

}
