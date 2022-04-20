class Person {
	constructor() {
		console.log('생성 되었습니다.');
	}
}
  
new Person(); // 생성 되었습니다.
  
  
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

new Person('경진', 27);

// Prototype을 사용하는 이유
const user = { name: '경진', age: 27 };
// const admin = { name: '관리자', age: 30, role: 'admin' };



// Prototype 활용 사례 # 1
let admin = {};
admin.__proto__ = user;
console.log(admin);

admin.role = 'admin'
  
  
// Prototype 활용 사례 # 2
var obj = { a: 10 };
Object.keys(obj); // ["a"]

// obj에 hasOwnProperty 라는 함수를 사용할 수 있는 것은
// obj가 prototype으로 기본 객체의 함수들을 상속 받기 때문이다.

// 이러한 API를 Build-in JavaScript 또는 JavaScript Native API 라고 한다.
obj.hasOwnProperty('a'); // true




  