import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutCard } from '../models/about-card/about-card';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  aboutTopics: AboutCard[] = [
    {
      imageSrc: " ",
      topic: "Mission",
      title: "Perfect environment",
      description: "Our mission as a gym is to provide a welcoming and supportive environment for people of all fitness levels to achieve their health and wellness goals. We strive to offer a wide range of high-quality equipment and personalized services to help our members achieve their fitness aspirations and improve their overall quality of life."
    },{
      imageSrc: " ",
      topic: "Vision",
      title: "Inspire members",
      description: "We aim to inspire and empower our members to lead healthier, more fulfilling lives, and to create a positive impact in our community through our fitness programs and initiatives."
    },{
      imageSrc: " ",
      topic: "Value",
      title: "Community",
      description: "We believe that fitness is more than just physical activity; it's a way to connect with others and build a supportive community. We foster a sense of community by organizing group fitness classes, social events, and other activities that bring our members together."
    },{
      imageSrc: " ",
      topic: "Value",
      title: "Inclusivity",
      description: "We believe that fitness is for everyone, regardless of age, gender, race, or ability. We strive to create a welcoming and inclusive environment where everyone feels comfortable and supported."
    }
  ]

  constructor() { }

  getAllAboutTopics(): Observable<AboutCard[]>{
    return of(this.aboutTopics);
  }
}
