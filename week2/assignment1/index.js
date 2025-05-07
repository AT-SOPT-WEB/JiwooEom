import { todos as todoData } from './todoData.js';

// DOM 요소
const todoBody = document.querySelector(".todo-body");
const priorityBtn = document.querySelector('.priority-btn');
const dropdown = document.querySelector('.priority-dropdown');
const input = document.querySelector(".input");
const prioritySelect = document.querySelector(".priority-select");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// filter handler 함수
// 전체 보기
const showAll = () => {
    renderTable();
};

// 완료된 항목만 보기
const showCompleted = () => {
    const filtered = todos.filter(todo => todo.completed);
    renderFilteredTodos(filtered);
};

// 미완료 항목만 보기
const showUncompleted = () => {
    const filtered = todos.filter(todo => !todo.completed);
    renderFilteredTodos(filtered);
};

// todo handler 함수
// 추가 기능
const handleAddTodo = () => {
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
    input.value = '';
    prioritySelect.value = '';
};

// 삭제 기능
const handleDeleteTodo = () => {
    const checkboxes = document.querySelectorAll('.todo-checkbox:checked');

    checkboxes.forEach((checkbox) => {
        const todoId = parseInt(checkbox.getAttribute('data-id'));
        const index = todos.findIndex(todo => todo.id === todoId);
        if (index !== -1) {
            todos.splice(index, 1);
        }
    });

    updateTodoList(todos);
    renderTable();
};

// 완료 기능
const handleFinishTodo = () => {
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
};

// todo 조작 버튼
const todoButtons = {
    add: { element: document.querySelector(".add-btn"), handler: handleAddTodo },
    delete: { element: document.querySelector(".delete-btn"), handler: handleDeleteTodo },
    finish: { element: document.querySelector(".finish-btn"), handler: handleFinishTodo }
};

// 필터 버튼
const filterButtons = {
    all: { element: document.querySelector(".all-btn"), handler: showAll },
    completed: { element: document.querySelector(".completed-btn"), handler: showCompleted },
    uncompleted: { element: document.querySelector(".uncompleted-btn"), handler: showUncompleted }
};

// 이벤트 리스너 등록
Object.values(todoButtons).forEach(btn => {
    btn.element.addEventListener('click', btn.handler);
});

Object.values(filterButtons).forEach(btn => {
    btn.element.addEventListener('click', btn.handler);
});

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

function updateTodoList(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
} 

// tr 생성
let draggedTodo = null;

function createTodoRow(todo, index) {
    const tr = document.createElement('tr');
    tr.setAttribute('draggable', true);
    tr.setAttribute('data-index', index);
    tr.innerHTML = `
        <td><input type="checkbox" class="todo-checkbox" data-id="${todo.id}" /></td>
        <td>${todo.priority}</td>
        <td>${todo.completed ? '✅' : '❌'}</td>
        <td>${todo.title}</td>
    `;

    // Drag 이벤트
    tr.addEventListener('dragstart', (e) => {
        draggedTodo = tr;
        e.dataTransfer.effectAllowed = "move";
    });

    tr.addEventListener('dragover', (e) => {
        e.preventDefault();
        tr.style.borderTop = '2px solid rgb(245, 175, 175)';
    });

    tr.addEventListener('dragleave', () => {
        tr.style.borderTop = '';
    });

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

    return tr;
}

// 테이블 렌더링
function renderHeader() {
    const header = document.getElementById("todo-header");

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

function renderTable() {
    renderHeader();
    todoBody.innerHTML = '';

    todos.forEach((todo, index) => {
        const tr = createTodoRow(todo, index);
        todoBody.appendChild(tr);
    });
}

renderTable();

// 개별 체크박스 상태 변경 시, 전체 선택 체크박스 상태 동기화
todoBody.addEventListener('change', (e) => {
    if (e.target.classList.contains('todo-checkbox')) {
        const checkboxes = document.querySelectorAll('.todo-checkbox');
        const selectAllCheckbox = document.getElementById('select-all');
        if (selectAllCheckbox) {
            selectAllCheckbox.checked = [...checkboxes].every(cb => cb.checked);
        }
    }
});

// 전체 선택 체크박스 상태 변경 시, 모든 개별 체크박스 상태 동기화
document.addEventListener('change', (e) => {
    const selectAllCheckbox = document.getElementById('select-all');
    if (e.target === selectAllCheckbox) {
        const checkboxes = document.querySelectorAll('.todo-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    }
});

// 필터링
function renderFilteredTodos(filteredTodos) {
    todoBody.innerHTML = '';
    filteredTodos.forEach((todo, index) => {
        const tr = createTodoRow(todo, index);
        todoBody.appendChild(tr);
    });
}

// 중요도 필터 드롭다운
priorityBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedPriority = parseInt(e.target.getAttribute('priority'));
        const filtered = todos.filter(todo => todo.priority === selectedPriority);
        renderFilteredTodos(filtered);
        dropdown.classList.add('hidden');
    }
});

// 모달 닫기
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});