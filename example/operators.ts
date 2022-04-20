// Union Type # 1
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


// Union Type # 2
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeoneUnion(someone: Developer | Person): void {
    console.log(someone.name);
}


// Intersection Type # 1
let invalidType: string & number & boolean;


// Intersection Type # 2
function askSomeoneIntersection(someone: Developer & Person): void {
    console.log(someone.name);
    console.log(someone.skill);
    console.log(someone.age);
}


// 유니온과 인터섹션의 차이점
const developer: Developer = { name: 'Kim', skill: 'ts' };
const person: Person = { name: 'Jung', age: 27 };

askSomeoneUnion(developer);
askSomeoneUnion(person);

askSomeoneIntersection(developer); // Error
askSomeoneIntersection(person); // Error
