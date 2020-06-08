import { DogClass } from "./classes/class";
import { getAnimalAgeInterface, getAnimalNameType } from "./classes-and-types";
import { dogType } from "./types/types";
import { IAnimal } from "./interfaces/interface";
import { AnimalTypesEnum } from "./enums";

describe("classes and type example tests", () => {
  it("gets the name of a dog from the class", () => {
    const rover = new DogClass(5, "Rover", 10);
    expect(getAnimalAgeInterface(rover)).toEqual(10);
  });

  it(" gets the dogs name from an object", () => {
    const willow: IAnimal = {
      height: 10,
      name: "Willow",
      type: AnimalTypesEnum.dog,
      age: 1,
    };
    expect(getAnimalAgeInterface(willow)).toEqual(1);
  });

  it("gets the name of a dog from the type", () => {
    const indie = dogType("Indie", 4);
    expect(getAnimalNameType(indie)).toEqual("Indie");
  });
});
