import { AnimalTypesEnum } from "../enums";

export interface IAnimal {
  type: AnimalTypesEnum;
  height: number;
  name: string;
  age?: number;
}
