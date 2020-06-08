import { AnimalTypesEnum } from "../enums";

export type AnimalType = {
  type: AnimalTypesEnum;
  height: number;
  name: string;
  age?: number;
};

export const dogType = (name: string, height: number): AnimalType => ({
  type: AnimalTypesEnum.dog,
  name,
  height,
});
