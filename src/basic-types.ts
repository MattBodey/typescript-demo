export const add = (a: number, b: number): number => a + b;

type StingAdder = (a: number, b: number) => string;

export const stringAdder: StingAdder = (a, b) => `${a}${b}`;

const differentTypes = (thing: string | number) => thing;

type demo = { b: { c?: { d: Array<string> } } };

const a: demo = {
  b: {
    c: undefined,
  },
};
