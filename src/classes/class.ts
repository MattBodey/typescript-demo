import { IAnimal } from "../interfaces/interface";
import { AnimalTypesEnum } from "../enums";

export class DogClass implements IAnimal {
  constructor(height: number, name: string, age?: number) {
    this.height = height;
    this.name = name;
    this.age = age;
  }

  name: string;
  height: number;
  type: AnimalTypesEnum = AnimalTypesEnum.dog;
  age?: number;
}
