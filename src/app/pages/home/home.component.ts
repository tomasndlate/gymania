import { Component } from '@angular/core';
import { AboutCard } from 'src/app/models/about-card/about-card';
import { FitnessClass } from 'src/app/models/fitness-class/fitness-class';
import { DefaultService } from 'src/app/services/default.service';
import { FitnessClassService } from 'src/app/services/fitness-class.service';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fitnessClasses: FitnessClass[] = [];
  gallery: string[] = [];
  aboutTopics: AboutCard[] = [];

  constructor(
    private fitnessClassService: FitnessClassService,
    private galleryService: GalleryService,
    private defaultService: DefaultService
    ){}

  ngOnInit(){
    this.getRecentClasses();
    this.getGallery();
    this.getAboutTopics();
  }

  getRecentClasses(){
    this.fitnessClassService.getSetOfFitnessClass(4).subscribe(fitClasses =>
      this.fitnessClasses = fitClasses
      );
  }


  getGallery(){
    this.galleryService.getSetOfPhotosGallery(10).subscribe(
      gallery => this.gallery = gallery
      );
  }

  getAboutTopics(){
    this.defaultService.getAllAboutTopics().subscribe(
      aboutTopic => this.aboutTopics = aboutTopic
    );
  }


}
