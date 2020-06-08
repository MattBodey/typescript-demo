import { IAnimal } from "./interfaces/interface";
import { AnimalType } from "./types/types";

export const getAnimalAgeInterface = (animal: IAnimal): number =>
  animal.age || 0;

export const getAnimalNameType = (animal: AnimalType): string => animal.name;
