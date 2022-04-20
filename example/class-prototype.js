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
  
  
// Class와 Prototype의 관계





  