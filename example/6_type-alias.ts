// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person = {
  name: string;
  age: number;
};

function getPerson(): Person {
  // ...
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  // skill: 'throwing a shield' 
}

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
}

const person1: IPerson = {
  name: 'p1',
  age: 30,
}

const person2: TPerson = {
  name: 'p2',
  age: 28,
}