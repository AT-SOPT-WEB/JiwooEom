// 요소 선택 !!!
const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

// localStorage에서 Todo 목록 불러오기
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// 초기화 - 화면에 표시
todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
});

// 추가 버튼 클릭 이벤트
addBtn.addEventListener('click', () => {
    const todoText = input.value;
    if (todoText === '') return; // input 없을 때

    // 리스트에 추가
    todos.push(todoText);

    // 로컬스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos));

    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);

    input.value = ''; // input 초기화
});
