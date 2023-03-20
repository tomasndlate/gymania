import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  galleryImages: string[] = [
    'assets/images/gallery/gallery-1.jpg',
    'assets/images/gallery/gallery-2.jpg',
    'assets/images/gallery/gallery-3.jpg',
    'assets/images/gallery/gallery-4.jpg',
    'assets/images/gallery/gallery-5.jpg',
    'assets/images/gallery/gallery-6.jpg',
    'assets/images/gallery/gallery-7.jpg',
    'assets/images/gallery/gallery-8.jpg',
    'assets/images/gallery/gallery-9.jpg',
    'assets/images/gallery/gallery-10.jpg',
    'assets/images/gallery/gallery-11.jpg'
  ]

  getAllPhotosGallery(): Observable<string[]>{
    return of(this.galleryImages);
  }

  getSetOfPhotosGallery(number: number): Observable<string[]>{
    return of(this.galleryImages.slice(0, number));
  }
}
