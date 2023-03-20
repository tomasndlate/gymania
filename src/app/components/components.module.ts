import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassCardComponent } from './class-card/class-card.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    ClassCardComponent,
    GridGalleryComponent,
    AboutCardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClassCardComponent,
    GridGalleryComponent,
    AboutCardComponent,
    CarouselComponent
  ]
})
export class ComponentsModule { }
