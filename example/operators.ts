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

function askSomeone(someone: Developer | Person) {
    console.log(someone.name);
}