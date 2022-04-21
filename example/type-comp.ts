// 인터페이스
interface IDeveloper {
  name: string;
  skill: string;
}

interface IPerson {
  name: string;
}

class CPerson {
  name: string;
}

let developer: IDeveloper;
let iPerson: IPerson;
let cPerson: CPerson;

// developer = iPerson; // Error
// developer = cPerson; // Error

iPerson = developer;
cPerson = developer;

// 함수
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}

// sum = add; // X
sum(1, 2);
// add = sum; // O

// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;

interface Empty<T> {}

let emptyString = Empty<string>;
let emptyNumber = Empty<number>;

emptyString = emptyNumber;
emptyNumber = emptyString;

interface NotEmpty<T> {
  data: T;
}

let empty1 = NotEmpty<string>;
let empty2 = NotEmpty<number>;

empty1 = empty2; // Error
empty2 = empty1; // Error


