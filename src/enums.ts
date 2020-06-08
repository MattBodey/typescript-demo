export enum Affiliation {
  staff,
  student,
  associate,
}

export const isStaff = (affil: Affiliation) => affil === Affiliation.staff;

export enum AnimalTypesEnum {
  bear,
  tiger,
  dog,
}
