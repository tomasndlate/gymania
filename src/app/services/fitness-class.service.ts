import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FitnessClass } from '../models/fitness-class/fitness-class';

@Injectable({
  providedIn: 'root'
})
export class FitnessClassService {

  constructor() { }

  fitnessClasses: FitnessClass[] = [{
    instructorId: "001I",
    name: "Zumba",
    imageSrc:"",
    description:"Class that flows with the music",
    minutesDuration: 30,
    date: new Date(2023, 4, 3, 15, 30)
  },{
    instructorId: "002I",
    name: "Hidrogym",
    imageSrc:"",
    description:"Class in the water",
    minutesDuration: 90,
    date: new Date(2023, 4, 5, 16, 15)
  },{
    instructorId: "001I",
    name: "Spinning",
    imageSrc:"",
    description:"Ride a bike until you die",
    minutesDuration: 60,
    date: new Date(2023, 4, 5, 16, 15)
  },{
    instructorId: "003I",
    name: "Cardio",
    imageSrc:"",
    description:"Lose everything you have",
    minutesDuration: 90,
    date: new Date(2023, 4, 5, 17, 40)
  }
  ]

  getAllFitnessClass(): Observable<FitnessClass[]>{
    return of(this.fitnessClasses);
  }

  getSetOfFitnessClass(number: number): Observable<FitnessClass[]>{
    return of(this.fitnessClasses.slice(0, number));
  }
}
