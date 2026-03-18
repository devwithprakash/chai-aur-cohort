const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Input field is empty");
    return;
  }
  todos.push(input.value);

  renderTodo(input.value);
  input.value = "";

  save();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    addBtn.click();
  }
});

function renderTodo(text) {
  if (!text) {
    alert("Input field is empty");
    return;
  }
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const container = document.createElement("div");

  container.className = "todo-container";
  delBtn.className = "delete";

  li.innerText = text;
  delBtn.innerText = "Delete";

  list.appendChild(container);
  container.appendChild(li);
  container.appendChild(delBtn);

  delBtn.addEventListener("click", () => {
    todos = todos.filter((t) => t !== text);
    container.remove();
    save();
  });

  container.addEventListener("dblclick", () => editTodo(li, delBtn, text));
}

function fetchTodo() {
  todos.forEach((item) => {
    renderTodo(item);
  });
}

function editTodo(li, delBtn, oldText) {
  const todoInput = document.createElement("input");
  const confirmBtn = document.createElement("button");

  todoInput.value = li.innerText;
  confirmBtn.innerText = "Confirm";

  confirmBtn.className = "confirm";

  li.replaceWith(todoInput);
  delBtn.replaceWith(confirmBtn);

  confirmBtn.addEventListener("click", () => {
    let newText = todoInput.value;

    li.innerText = newText;

    todoInput.replaceWith(li);
    confirmBtn.replaceWith(delBtn);

    let index = todos.indexOf(oldText);

    todos[index] = newText;

    save();
  });
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

fetchTodo();
