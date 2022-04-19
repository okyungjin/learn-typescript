# Table of Contents
- [Table of Contents](#table-of-contents)
- [About Project](#about-project)
- [Dev Notes](#dev-notes)
  - [JavaScript를 TypeScript처럼 사용하는 방법](#javascript를-typescript처럼-사용하는-방법)
    - [예시 1](#예시-1)
    - [예시 2](#예시-2)
  - [TypeScript 프로젝트 시작하기](#typescript-프로젝트-시작하기)
    - [tsc 설치 및 실행](#tsc-설치-및-실행)
    - [tsconfig.json](#tsconfigjson)
- [License & Copyright](#license--copyright)

# About Project

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
    "allowJs": true, // 프로젝트에 js 파일을 허용한다.
    "checkJs": true, // @ts-check 와 동일한 기능
    "noImplicitAny": true, // 최소한 any 타입이라도 넣어야 한다.
  }
}
```

# License & Copyright

**Copyright © 2020 Captain Pangyo**
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.
