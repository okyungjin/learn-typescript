interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'KyungJin', age: 33, skill: 'TypeScript' }
}

const kyungj = introduce();
console.log(kyungj.skill);

if ((kyungj as Developer).skill) {
    const skill = (kyungj as Developer).skill;
    console.log(skill);
} else if ((kyungj as Person).age) {
    const age = (kyungj as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(kyungj)) {
    const skill = kyungj.skill;
    console.log(skill)
} else {
    const age = kyungj.age;
    console.log(kyungj.age);
}