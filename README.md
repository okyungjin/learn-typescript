# Table of Contents
- [Table of Contents](#table-of-contents)
- [About Repository](#about-repository)
- [Dev Notes](#dev-notes)
  - [JavaScript를 TypeScript처럼 사용하는 방법](#javascript를-typescript처럼-사용하는-방법)
    - [예시 1](#예시-1)
    - [예시 2](#예시-2)
  - [TypeScript 프로젝트 시작하기](#typescript-프로젝트-시작하기)
    - [tsc 설치 및 실행](#tsc-설치-및-실행)
    - [tsconfig.json](#tsconfigjson)
  - [TypeScript 변수 타입](#typescript-변수-타입)
    - [기본 타입](#기본-타입)
    - [함수에 타입 정의](#함수에-타입-정의)
  - [인터페이스 (Interface)](#인터페이스-interface)
    - [1) 인터페이스 정의](#1-인터페이스-정의)
    - [2) 변수에 사용](#2-변수에-사용)
    - [3) 함수에 사용](#3-함수에-사용)
    - [4) 함수의 스펙(구조)에 사용](#4-함수의-스펙구조에-사용)
    - [5) 인덱싱](#5-인덱싱)
    - [6) Dictionary 패턴](#6-dictionary-패턴)
    - [7) 인터페이스 확장](#7-인터페이스-확장)
  - [타입 별칭 (Type Alias)](#타입-별칭-type-alias)
    - [정의 및 사용법](#정의-및-사용법)
    - [인터페이스와 차이점](#인터페이스와-차이점)
  - [연산자를 이용한 타입 정의](#연산자를-이용한-타입-정의)
    - [유니온 타입 (Union Type)](#유니온-타입-union-type)
    - [인터섹션 타입 (Intersection Type)](#인터섹션-타입-intersection-type)
    - [유니온 타입과 인터섹션 타입의 차이점](#유니온-타입과-인터섹션-타입의-차이점)
  - [Enum](#enum)
    - [숫자형 Enum](#숫자형-enum)
    - [문자형 Enum](#문자형-enum)
    - [Enum 활용 사례](#enum-활용-사례)
  - [클래스 (Class)](#클래스-class)
  - [제네릭 (Generic)](#제네릭-generic)
    - [제네릭 사용하기](#제네릭-사용하기)
    - [유니온 타입과의 차이점](#유니온-타입과의-차이점)
    - [제네릭의 장점](#제네릭의-장점)
    - [제네릭 실전 예제](#제네릭-실전-예제)
    - [제네릭의 타입 제한 #1 - 배열 힌트 주기](#제네릭의-타입-제한-1---배열-힌트-주기)
    - [제네릭의 타입 제한 #2 - 정의된 타입 이용하기](#제네릭의-타입-제한-2---정의된-타입-이용하기)
    - [제네릭의 타입 제한 #3 - `keyof` 사용](#제네릭의-타입-제한-3---keyof-사용)
  - [타입 추론 (Type Inference)](#타입-추론-type-inference)
    - [상속 받은 인터페이스의 타입 추론](#상속-받은-인터페이스의-타입-추론)
    - [Best Common Type](#best-common-type)
  - [타입 단언 (Type Assertion)](#타입-단언-type-assertion)
    - [타입 단언이란](#타입-단언이란)
    - [실용적인 예제 - DOM API 조작](#실용적인-예제---dom-api-조작)
  - [[JavaScript] Prototype](#javascript-prototype)
    - [Prototype을 사용하는 이유](#prototype을-사용하는-이유)
    - [Prototype 활용 사례 #1](#prototype-활용-사례-1)
    - [Prototype 활용 사례 #2](#prototype-활용-사례-2)
  - [[JavaScript] Class](#javascript-class)
    - [Class 사용법](#class-사용법)
    - [Class와 Prototype의 관계](#class와-prototype의-관계)
- [License & Copyright](#license--copyright)

# About Repository

인프런의 [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner) 온라인 강의를 수강하면서 습득한 지식을 기록한 레포지터리입니다.

# Dev Notes
## JavaScript를 TypeScript처럼 사용하는 방법
### 예시 1
JavaScript에 type을 적용하여 TypeScript처럼 사용할 수 있다.
[Jsdoc](https://devdocs.io/jsdoc/tags-typedef)에 안내된 `@typedef` 를 사용하면 코드 자동완성 기능을 제공한다.

```js
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */


/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
```

### 예시 2
JavaScript에서 `// @ts-check` 를 사용하면 TypeScript처럼 타입에 대한 정보를 얻거나, 타입 에러를 체크할 수 있다.

[sample.js](/why-ts/sample.js)
```js
// @ts-check

/**
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */
function sum(a, b) {
    return a + b;
}

sum(10, '20')
```

<img width="565" alt="스크린샷 2022-04-19 오후 5 16 09" src="https://user-images.githubusercontent.com/31913666/163957376-0631f253-0e5d-4a0e-906f-1f5ae1170361.png">


## TypeScript 프로젝트 시작하기

### tsc 설치 및 실행

**tsc 설치**
TypeScript 파일을 브라우저가 인식할 수 없으므로 JavaScript 파일로 변환해주어야 한다. 이 과정을 **컴파일**이라고 한다.

컴파일 과정을 위해서는 TypeScript 컴파일러인 **tsc**를 설치해야 한다.

`npm i typescript -g` 명령어를 실행하여 tsc를 설치할 수 있다.


<br>


**tsc 실행**

`getting-started/index.ts` 를 tsc로 변환하면 `index.js` 파일이 생성된다.

```ts
// index.ts
function sumNumbers(a: number, b: number): number {
    return a + b;
}

sumNumbers(10, 20);
```
tsc로 변환된 js 파일은 다음과 같다.
```js
// index.js
function sumNumbers(a, b) {
    return a + b;
}
sumNumbers(10, 20);
```

### tsconfig.json
매번 `tsc filename.ts` 를 사용하여 수동으로 컴파일 해줄 수는 없으므로, `tsconfig.json` 파일을 생성하여 컴파일 옵션을 설정해줄 수 있다.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicitAny": true,
  }
}
```

**옵션 설명**
- `"allowJs": true` 프로젝트에 js 파일을 허용한다.
- `"checkJs": true` @ts-check 와 동일한 기능
- `"noImplicitAny": true` 최소한 any 타입이라도 넣어야 한다.

**전화번호부 실습 tsconfig.json**
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "target": "es5",
    "lib": ["es2015", "dom", "dom.iterable"],
    "noImplicitAny": true,
    "strict": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true
  },
  "include": ["./src/**/*"]
}
```

## TypeScript 변수 타입
### [기본 타입](example/1_type-basic.ts)
- string
- number
- Array
- tuple (모든 인덱스에 타입이 정해진 배열)
- object
- boolean

**NOTES**
```ts
// tuple
const address: [string, number] = ['판교', 40];

// object
const person: { age: number; name: string } = {
  age: 100,
  name: 'KyungJin'
};
```

### [함수에 타입 정의](example/3_functions.ts)

**함수 옵셔널 파라미터(optional parameter)**

JavaScript 함수는 정의한 param 보다 많은 인자가 들어와도 오류가 발생하지 않고, 앞부터 순서대로 param으로 인식된다.
```js
function sum(a, b) {
  return a + b;
}

sum(10, 20, 30, 40, 50)
```

TypeScript에서는 위와 같이 코드를 작성하면 오류가 발생하므로. **Optional Parameter**를 사용해야 한다.
```ts
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
```

## 인터페이스 (Interface)
인터페이스는 상호 간의 약속이다. 인터페이스를 사용하면 객체가 가지는 속성을 파악하기에 용이하다.

아래 예시에서 소스를 처음 보는 사람도 `User` 라는 객체에는 `age`, `name` 속성이 있다는 것을 쉽게 파악할 수 있다.

api 응답에 대한 인터페이스를 구성해놓으면 편리하다.

### 1) 인터페이스 정의

```ts
interface User {
  age: number;
  name: string;
}
```

### 2) 변수에 사용
```ts
const kyungj: User = {
  age: 27,
  name: 'KyungJin Jung'
}
```

### 3) 함수에 사용
```ts
function getUser(user: User) {
  console.log(user);
}

getUser(kyungj);
```

### 4) 함수의 스펙(구조)에 사용
```ts
interface Sumfunction {
  (a: number, b: number): number;
}

const sum: Sumfunction = function(a: number, b: number): number {
  return a + b;
}
```

### 5) 인덱싱
```ts
interface StringArray {
  [index: number]: string;
}

const arr = ['a', 'b', 'c'];
// arr[0] = 10 -> Error
arr[0] = 'd';
```

### 6) Dictionary 패턴
```ts
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
```

### 7) 인터페이스 확장
아래 예시에서 `Developer` 인터페이스는 `Person` 인터페이스의 속성인 `name`, `age` 가 정의되어 있다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  age: number;
  skills: string[],
}
```
이러한 경우 `extends` 를 사용하여 인터페이스를 상속 받으면 된다.
```ts
interface Developer extends Person {
  skills: string[],
}

const kyungJ: Developer = {
  name: 'KyungJin Jung',
  age: 27,
  skills: ['js', 'ts']
}
```


## 타입 별칭 (Type Alias)
타입 별칭은 말 그대로 타입에 대한 별명이다. 긴 타입 정의에 별명을 붙여 간결하게 사용할 수 있도록 해준다.
### 정의 및 사용법
인터페이스와 유사한 문법인 `Type Alias` 는 다음과 같이 사용한다.

```ts
type MyString = string;
const str: MyString = 'hello'
```

```ts
type Todo = {
  id: number;
  title: string;
  done: boolean;
}

function getTodo(todo: Todo) { ... }
```

```ts
type Person = {
  name: string;
  age: number;
}

const person: Person = {
  name: 'person',
  age: 25,
}
```


### 인터페이스와 차이점
타입 별칭은 인터페이스와 상당히 유사해 보인다.
```ts
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
```

타입 별칭과 인터페이스는 용법이 유사하지만 **타입 별칭은 확장이 불가**하다는데에 큰 차이가 있다.
TypeScript 공식 문서에서도 가급적 인터페이스를 사용하라고 권고하고 있다.

## 연산자를 이용한 타입 정의
### 유니온 타입 (Union Type)
두 개 이상의 타입을 허용하고 싶을 때 pipe (`|`) 연산자를 사용하여 타입을 Union 할 수 있다.
`logMessage` 는 인자로 `string` 과 `number` 타입을 허용한다.

```ts
function logMessage(value: string | number): void {
    console.log(value);
}

logMessage('hello');
logMessage(10);
```

<br>

**예시 1**
타입 유니온의 장점으로는 타입에 따른 분기 생성이 가능하다는 것이다.
```ts
function logMessage(value: string | number): void {
  if (typeof value === 'number') {
    console.log(value.toLocaleString());
    return;
  }
  if (typeof value === 'string') {
    console.log(value);
    return;
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(10);
```

<br >

**예시 2**
```ts
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeoneUnion(someone: Developer | Person) {
  console.log(someone.name);
}
```
union 속성에서 주의해야 할 점이 있다.
> `Developer | Person` 일 때 someone에서 접근 가능한 가능한 프로퍼티는 두 인터페이스의 공통 프로퍼티인 `name` 뿐이라는 것이다.

<img width="479" alt="스크린샷 2022-04-20 오전 11 39 06" src="https://user-images.githubusercontent.com/31913666/164136065-60116c07-1f66-4e47-a709-da55e73f5a53.png">

TypeScript는 인자로 `Devloper` 가 들어올지 `Person` 이 들어올 지 알 수 없다.  `someone.age` 등의 접근을 허용하게 되면 오류가 발생할 수 있으므로 공통 속성의 접근만 허용한다.

**헷갈리니 주의하도록 하자!**


### 인터섹션 타입 (Intersection Type)
인터섹션을 사용하면 `Developer` 와 `Person` 이 가지고 있는 모든 속성의 타입을 포함하는 새로운 타입으로 정의한 것이다. 따라서 `name`, `skill`, `age` 에 모두 접근할 수 있다.

```ts
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeoneIntersection(someone: Developer & Person): void {
    console.log(someone.name);
    console.log(someone.skill);
    console.log(someone.age);
}
```

<img width="616" alt="스크린샷 2022-04-20 오전 11 59 29" src="https://user-images.githubusercontent.com/31913666/164141539-48401d65-1002-4523-8486-016b87b2ba07.png">


### 유니온 타입과 인터섹션 타입의 차이점
유니온 타입과 인터섹션 타입의 차이는 사용 예시를 보면 쉽게 이해가 가능하다.

```ts
const developer: Developer = { name: 'Kim', skill: 'ts' };
const person: Person = { name: 'Jung', age: 27 };

askSomeoneUnion(developer);
askSomeoneUnion(person);

askSomeoneIntersection(developer); // Error
askSomeoneIntersection(person); // Error
```
`askSomeoneUnion` 는 오류 없이 실행되지만, `askSomeoneIntersection` 에서는 오류가 발생한다. `askSomeoneIntersection` 의 param에는 `name`, `skill`, `age` 속성을 모두 가지는 객체가 와야 한다.

## Enum
### 숫자형 Enum
```ts
enum Shoes {
  Nike,
  Adidas,
}

var myShoes: Shoes = Shoes.Nike;
console.log(myShoes); // 0
```

### 문자형 Enum
```ts
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes: Shoes = Shoes.Nike;
console.log(myShoes); // '나이키'
```

### Enum 활용 사례
정답 혹은 오답을 출력하는 `askQuestion` 함수가 있다. 이 함수의 인자로 y, yes, YES 등 다양한 문자열이 들어갈 수 있다.

```ts
function askQuestion(answer: string) {
	if (answer === 'yes')
		console.log('정답입니다.')
	if (answer === 'no')
		console.log('오답입니다.')
}

askQuestion('y');
askQuestion('yes');
askQuestion('YES');
```

이러한 경우 Enum을 사용하여 함수의 잘못된 사용을 방지할 수 있다.

```ts
enum Answer {
	Yes,
	No
}

function askQuestion(answer: Answer) {
	if (answer === Answer.Yes)
		console.log('정답입니다.')
	if (answer === Answer.No)
		console.log('오답입니다.')
}

askQuestion('y'); // Error
askQuestion('yes'); // Error
askQuestion(Answer.Yes);
```

## 클래스 (Class)
TypeScript의 클래스를 이해하기 위해서는 JavaScript의 클래스부터 이해해야 한다.

- [[JavaScript] Prototype](#javascript-prototype)
- [[JavaScript] Class](#javascript-class)

TypeScript에서는 속성을 정의해야 하며, 속성에 access modifier를 붙일 수 있다.

```ts
class Person {
  private name: string;
  private age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## 제네릭 (Generic)
### 제네릭 사용하기
`getNumber` 함수는 number를 인자로 받아 number를 반환하는 함수이고,
`getArray` 는 string[]을 인자로 받아 string[]을 반환하는 함수이다.

```ts
function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}
```
이처럼 타입만 상이하고 기능이 동일할 때 제네릭을 사용하면 코드의 중복을 줄일 수 있다.

```ts
function getValue<T>(value: T): T {
  return value;
}

logText<string>('하이');
```
`logText('하이');` 로 사용해도 타입 추론을 통해 T가 string 이라는 것을 알 수 있지만, `<string>` 을 사용하여 타입을 명시해주는 것이 좋다.

### 유니온 타입과의 차이점
제네릭과 유니온 타입이 유사해 보일 수도 있는데 사용 시에 차이점이 있다.
```ts
function logText(text: string | number) {
  console.log(text);
  return text;
}

const log = logText('a');
log.split(); // Error
```
유니온 타입으로 선언한 `logText` 의 반환값을 `log` 변수에 저장한다. `log` 변수에 `split()` 함수를 사용하려고 하면 오류가 난다.

`log` 변수에는 string과 number 타입을 모두 충족하는 함수만 사용이 가능하다. 따라서, string에서만 사용할 수 있는 `split()` 을 사용하려면 오류가 발생한다.

### 제네릭의 장점
제네릭을 사용하면 **함수를 호출하는 시점에 함수의 타입을 정의**할 수 있다.
```ts
function logText<T>(text: T): T{
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(false);
```
`str.split('')` 같이 `<string>` 으로 정의된 logText의 반환 값에는 `split()` 을 사용할 수 있다.

`logText<boolean>` 로 타입을 지정하면 인자에는 boolean 값만 넣을 수 있다.

### 제네릭 실전 예제
[dropdown-generic.ts](example/dropdown-generic.ts) 커밋 확인!

**유용한 팁**
`createDropdownItem` 함수에서 item으로 제네릭의 타입을 제한하고 있는데 조금 더 개선해보자.

```ts
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  // ... 
}
```

`createDropdownItem` 에 제네릭을 사용하여 타입을 제한할 수 있다.
```ts
function createDropdownItem<T>(item: DropdownItem<T>) { // 제네릭 타입을 DropdownItem에 넘겨주기
  // 생략
}

emails.forEach(function (email) {
  const item = createDropdownItem<string>(email); // 제네릭 사용
  // 이하 생략
});
```

### 제네릭의 타입 제한 #1 - 배열 힌트 주기
다음과 같이 제네릭 함수 안에서 `text.length` 를 출력하려고 하면 오류가 발생한다.
TypeScript는 T가 배열인지 알 수 없기 때문이다.

```ts
function logTextLength<T>(text: T): T {
  console.log(text.length); // Error
  return text;
}
```
배열이라는 힌트를 주려면 `T[]` 를 사용하면 된다.
```ts
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}
```

### 제네릭의 타입 제한 #2 - 정의된 타입 이용하기
```ts
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}
```

### 제네릭의 타입 제한 #3 - `keyof` 사용
`getAllowedOptions` 라는 함수의 인자로 `ShoppingItems` 의 속성인 `name`, `price`, `address`, `stock` 중 하나만 받도록 만들고 싶다.

```ts
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
getAllowedOptions();
```
`extends keyof` 를 사용하여 제네릭을 정의해주면 된다.
```ts
function getShoppingItemOption<T extends keyof ShoppingItems>(itemOption: T): T {
  return itemOption
}

getShoppingItemOption('name');
getShoppingItemOption('price'); // 외의 문자열은 오류 발생
```

## 타입 추론 (Type Inference)
코드를 작성할 때마다 TypeScript Language Server가 동작하여 타입을 추론해 내는 것이 **타입 추론**이다.

### 상속 받은 인터페이스의 타입 추론
`Dropdown<T>` 를 상속 받은 `DetailedDropdown<T>` 은 속성에 `value`, `title` 이 존재한다.

```ts
interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
```
`DetailedDropdown<T>` 의 전체 속성을 나열해보면 다음과 같다!
```ts
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
  value: T;
  title: string;
}
```

따라서 `DetailedDropdown` 에서 제네릭을 number로 지정하면, `tag`, `value` 에는 number 타입만 할당이 가능하다.
```ts
var detailItems: DetailedDropdown<number> = {
  description: 'desc',
  tag: 10,
  value: 10,
  title: 'title',
}
```

### Best Common Type
**Best Common Type**은 새로운 타입이 아니라 TypeScript가 type을 추론하는 알고리즘이다. 유니온을 해가면서 가장 적절한 타입을 추론한다.

예를 들어,
```ts
const arr1 = [1, 2, 3]; // Type: number
const arr2 = [1, 2, true] // Type: number | boolean
```

## 타입 단언 (Type Assertion)
### 타입 단언이란
`let b = a` 를 실행해도 `b` 의 타입은 any로 추론된다.
중간에 `a` 의 값이 변경되었으나 처음에 any 타입으로 선언되었기 때문이다. `b` 는 `a` 가 선언된 시점의 타입을 할당 받는다.

```ts
let a; // Type: any
a = 20; // Type: any
a = 'a' // Type: any

let b = a // Type of 'b': any
```
`b` 에 string 타입을 지정해주고 싶다면 다음과 같이 `as` 키워드로 **타입 단언**을 해주면 된다.
```ts
let b = a as string; // Type of 'b': string
```

**타입 단언**이라는 의미는 `내가 타입을 지정할테니 TypeScript 너는 타입 신경쓰지마` 같은 의미이다.

### 실용적인 예제 - DOM API 조작
실무 프로젝트에서 타입 단언은 DOM API를 조작할 때 주로 사용된다.

`app` 의 타입은 `HTMLDivElement | null` 이다. DOM에 항상 id가 `app` 인 태그가 존재한다고 보장할 수 없기 때문이다.

따라서 `app.innerHTML` 을 사용하려면 if로 감싸서 null이 아니라는 보장을 해주어야 한다.

```ts
const app = document.querySelector('#app');
if (app) {
  app.innerHTML;
}
```

타입 단언을 사용하면 `app` 은 무조건 `HTMLDivElement` 타입이므로 `app.innerHTML` 을 바로 사용할 수 있다.

```ts
const app = document.querySelector('#app') as HTMLDivElement;
app.innerHTML;

```
## [JavaScript] Prototype
### Prototype을 사용하는 이유
```js
const user = { name: '경진', age: 27 };
const admin = { name: '관리자', age: 30, role: 'admin' };
```
user와 admin을 정의하려는데 name, age 등의 속성이 중복되는 것을 볼 수 있다.
이러한 경우 Prototype을 사용하려 코드의 중복을 방지할 수 있다.

### Prototype 활용 사례 #1
Prototype을 사용하여 user의 정보를 admin에서 재활용해보자.
`admin.__proto__ = user` 를 통해 user의 기본 정보들을 admin이 상속 받을 수 있다.

```js
const user = { name: '경진', age: 27 };

let admin = {};
admin.__proto__ = user;

console.log(admin);
```

<img width="376" alt="스크린샷 2022-04-20 오후 12 44 45" src="https://user-images.githubusercontent.com/31913666/164146152-597a7886-55f9-4789-912a-053f74fad890.png">


이제 user의 정보를 상속 받았으니 admin의 role을 추가해준다.
```js
admin.role = 'admin';
```

### Prototype 활용 사례 #2
obj에 `hasOwnProperty` 라는 함수를 사용할 수 있는 것은 obj가 prototype으로 기본 객체의 함수들을 상속 받기 때문에 가능하다.

이러한 API를 **Build-in JavaScript** 또는 **JavaScript Native API** 라고 한다.


Prototype은 단순히 객체를 확장하는 것 뿐만 아니라, 정의된 함수도 사용할 수 있게 해준다는 점을 기억하자.

```js
var obj = { a: 10 };
obj.hasOwnProperty('a'); // true
```
## [JavaScript] Class
### Class 사용법

```js
class Person {
  constructor() {
    console.log('생성 되었습니다.');
  }
}

new Person(); // 생성 되었습니다.
```

생성자에 인자를 넣을 수도 있다.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

new Person('경진', 27);
```
### Class와 Prototype의 관계
Class는 기존 기능(Prototype)은 유지한 채 문법만 변경된 Syntactic suger이다.
아래 두 코드는 정확하게 동일한 코드이다.

```js
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const kyungj = new Person('경진', 27);
```
```js
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const kyungj = new Person('경진', 27);
```




# License & Copyright

**Copyright © 2020 Captain Pangyo**
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.