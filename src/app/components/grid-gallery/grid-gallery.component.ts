import { Component, Input } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.scss']
})
export class GridGalleryComponent {

  constructor(){}

  @Input() gallery: string[] = []

  ngOnInit(){
  }

}
