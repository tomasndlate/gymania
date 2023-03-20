export class FitnessClass {

  constructor(
    public instructorId: string,
    public name: string,
    public imageSrc: string,
    public description: string,
    public minutesDuration: number,
    public date: Date
  ){}

  toString(): string {
    return JSON.stringify(this);
  }
}
