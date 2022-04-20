// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 함수의 스펙(구조)에 활용
interface Sumfunction {
  (a: number, b: number): number;
}

const sum: Sumfunction = function(a: number, b: number): number {
  return a + b;
}


// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr = ['a', 'b', 'c'];
// arr[0] = 10 -> Error
arr[0] = 'd';


// 딕셔너리 패턴
interface StringRegexDict {
  [key: string]: RegExp
}

const obj: StringRegexDict = {
  // sth: 'css' -> Error
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

obj['cssFile'] = 'abc'; // Error 발생
obj['cssFile'] = /abc/; // Error 발생하지 않음


// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skills: string[],
}

const kyungJ: Developer = {
  name: 'KyungJin Jung',
  age: 27,
  skills: ['js', 'ts']
}


// 함수의 전체 타입에 사용하는 경우
// interface SumFunction {
//   (a: number, b: number): number;
// }
// let sum: SumFunction;
// sum = function (num1: number, num2: string): number {
//   return num1 + num2;
// };

// 배열의 인덱싱에 사용하는 경우
// interface StringArray {
//   [index: number]: string;
// }
// let arr: StringArray;
// arr[0] = 'hi';
// arr[1] = 10;
