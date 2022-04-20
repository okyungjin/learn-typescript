interface Todo {
  id: number;
  title: string;
  done: boolean;
}
/*
  [#1] Interface 사용하지 않고 정의하기
  다음과 같이 정의해줄 수 있으나 소스의 중복이 발생한다.
  let todoItems: {id: number, title: string, done: boolean}[];

  [#2] type define으로도 Todo를 선언할 수 있다.
  type Todo = {id: number, title: string, done: boolean};
*/

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  return [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
}

// crud methods
function fetchTodos() {
  const todos: object[] = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = { id: 4, title: '안녕하세요', done: false };
  addTodo(item1);

  const item2 = { id: 5, title: 'TypeScript', done: false };
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
