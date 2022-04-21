let a;
a = 20;
a = 'a';

let b = a;

// 타입 단언 사용
let c = a as string;


// DOM API 조작
// <div id="app"></div>

const div = document.querySelector('#app') as HTMLDivElement;
div.innerHTML;

