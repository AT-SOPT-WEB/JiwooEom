// ====================== 데이터 ========================= //
import { todos as todoData } from './todoData.js';

const todoBody = document.querySelector(".todo-body");

// localStorage에 todos가 없으면 초기 데이터 저장
if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todoData));
}

// localStorage에 lastId가 없으면 초기화 (todoData 중 가장 큰 id로 설정)
if (!localStorage.getItem('lastId')) {
    const maxId = todoData.length > 0 ? Math.max(...todoData.map(t => t.id)) : 0;
    localStorage.setItem('lastId', String(maxId));
}  

const todos = JSON.parse(localStorage.getItem('todos'));

// todo 업데이트 함수
function updateTodoList(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
} 

// 전체 선택 체크박스 상태 변경 시, 모든 개별 체크박스 상태 동기화
const selectAllCheckbox = document.getElementById('select-all');
selectAllCheckbox.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('.todo-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
});

// ====================== todo 테이블 ========================= //
// 테이블 header 렌더링 함수
function renderHeader() {
    const header = document.getElementById("todo-header");

    // todo가 비어있을 경우 체크박스 대신 ✓ 표시
    if (todos.length === 0) {
        header.innerHTML = `
            <tr>
                <th>✓</th>
                <th>중요도</th>
                <th>완료됨</th>
                <th>할 일</th>
            </tr>
        `;
    } else {
        header.innerHTML = `
            <tr>
                <th><input type="checkbox" id="select-all" /></th>
                <th>중요도</th>
                <th>완료됨</th>
                <th>할 일</th>
            </tr>
        `;
    }
}

let draggedTodo = null; // drag 중인 tr 요소 저장

// 테이블 body 렌더링 함수
function renderTable() {
    renderHeader();

    todoBody.innerHTML = '';
    todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('draggable', true);
        tr.setAttribute('data-index', index);
        tr.innerHTML = `
            <td><input type="checkbox" class="todo-checkbox" data-id="${todo.id}" /></td>
            <td>${todo.priority}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
            <td>${todo.title}</td>
        `;

        // drag 시작 시 현재 tr 저장
        tr.addEventListener('dragstart', (e) => {
            draggedTodo = tr;
            e.dataTransfer.effectAllowed = "move";
        });

        // drop 허용
        tr.addEventListener('dragover', (e) => {
            e.preventDefault();
            tr.style.borderTop = '2px solid rgb(245, 175, 175)';
        });

        // drag 벗어날 때 스타일 제거
        tr.addEventListener('dragleave', () => {
            tr.style.borderTop = '';
        });

        // drop 처리
        tr.addEventListener('drop', () => {
            tr.style.borderTop = '';
            const fromIndex = parseInt(draggedTodo.getAttribute('data-index'));
            const toIndex = parseInt(tr.getAttribute('data-index'));
            if (fromIndex !== toIndex) {
                const [moved] = todos.splice(fromIndex, 1);
                todos.splice(toIndex, 0, moved);
                updateTodoList(todos);
                renderTable();
            }
        });

        todoBody.appendChild(tr);
    });

    // 개별 체크박스 상태 변경 시, 전체 선택 체크박스 상태 동기화
    const checkboxes = document.querySelectorAll('.todo-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
        const allChecked = [...checkboxes].every(cb => cb.checked);
        selectAllCheckbox.checked = allChecked;
    });
  });
}

// 초기 렌더링 실행
renderTable();

// ====================== 상단 섹션 (필터링) ========================= //
// 전체 보기
const allBtn = document.querySelector(".all-btn");
allBtn.addEventListener('click', () => {
    renderTable();
});

// 완료된 항목만 보기
const completedBtn = document.querySelector(".completed-btn");
completedBtn.addEventListener('click', () => {
    const completedTodos = todos.filter(todo => todo.completed);
    todoBody.innerHTML = '';

    completedTodos.forEach((todo) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="todo-checkbox" data-id="${todo.id}" /></td>
            <td>${todo.priority}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
            <td>${todo.title}</td>
        `;
        todoBody.appendChild(tr);
    });
});

// 미완료 항목만 보기
const uncompletedBtn = document.querySelector(".uncompleted-btn");
uncompletedBtn.addEventListener('click', () => {
    const uncompletedTodos = todos.filter(todo => !todo.completed);
    todoBody.innerHTML = '';

    uncompletedTodos.forEach((todo) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="todo-checkbox" data-id="${todo.id}" /></td>
            <td>${todo.priority}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
            <td>${todo.title}</td>
        `;
        todoBody.appendChild(tr);
    });
});

// 중요도 필터 드롭다운
const priorityBtn = document.querySelector('.priority-btn');
const dropdown = document.querySelector('.priority-dropdown');
priorityBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const selectedPriority = parseInt(e.target.getAttribute('priority'));
      const filteredTodos = todos.filter(todo => todo.priority === selectedPriority);
      todoBody.innerHTML = '';

      filteredTodos.forEach((todo) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="todo-checkbox" data-id="${todo.id}" /></td>
            <td>${todo.priority}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
            <td>${todo.title}</td>
        `;
        todoBody.appendChild(tr);
      });
      dropdown.classList.add('hidden'); // 드롭다운 닫기
    }
});

// ====================== 할 일 추가 섹션 ========================= //
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const prioritySelect = document.querySelector(".priority-select");

addBtn.addEventListener('click', () => {
    const todoText = input.value.trim();
    const priority = parseInt(prioritySelect.value);

    if (todoText === '' || isNaN(priority)) {
        alert("할 일과 중요도를 모두 입력해주세요!");
        return;
    }

    const lastId = parseInt(localStorage.getItem('lastId')) || 0;
    const newId = lastId + 1;
    localStorage.setItem('lastId', String(newId));

    const newTodo = {
        id: newId,
        title: todoText,
        completed: false,
        priority: priority,
    };

    todos.push(newTodo);
    updateTodoList(todos);
    renderTable();
    input.value = ''; // input 초기화
    prioritySelect.value = ''; // 중요도 선택 초기화
});

// ====================== 삭제-완료 버튼 ========================= //
// 삭제 기능
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.todo-checkbox:checked');

    checkboxes.forEach((checkbox) => {
        const todoId = parseInt(checkbox.getAttribute('data-id'));
        const index = todos.findIndex(todo => todo.id === todoId);
        if (index !== -1) {
            todos.splice(index, 1); // 해당 항목 삭제
        }
    });

    updateTodoList(todos);
    renderTable();
});

// 완료 기능
const finishBtn = document.querySelector(".finish-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

finishBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.todo-checkbox:checked');
    let hasAlreadyCompleted = false;

    checkboxes.forEach((checkbox) => {
        const todoId = parseInt(checkbox.getAttribute('data-id'));
        const todo = todos.find(todo => todo.id === todoId);
        if (todo.completed) {
            hasAlreadyCompleted = true;
        }
    });

    if (hasAlreadyCompleted) {
        modal.classList.remove('hidden');
        return;
    }

    checkboxes.forEach((checkbox) => {
        const todoId = parseInt(checkbox.getAttribute('data-id'));
        const todo = todos.find(todo => todo.id === todoId);
        if (!todo.completed) {
            todo.completed = true;
        }
    });

    updateTodoList(todos);
    renderTable();
});

// 모달 닫기
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});