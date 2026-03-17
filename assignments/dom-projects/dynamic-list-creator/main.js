const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Input field is empty");
    return;
  }

  const container = document.createElement("div");
  const li = document.createElement("li");
  const delBtn = document.createElement("button");

  li.innerText = input.value;
  delBtn.innerText = "Delete";

  container.className = "todo-container";
  delBtn.className = "delete";

  list.appendChild(container);
  container.appendChild(li);
  container.appendChild(delBtn);

  input.value = "";

  delBtn.addEventListener("click", () => {
    container.remove();
  });

  container.addEventListener("dblclick", () => {
    const todoInput = document.createElement("input");
    const confirmBtn = document.createElement("button");

    todoInput.value = li.innerText;

    todoInput.className = "todoInput";
    confirmBtn.className = "confirmbtn";
    confirmBtn.innerText = "Confirm";

    li.replaceWith(todoInput);
    delBtn.replaceWith(confirmBtn);

    confirmBtn.addEventListener("click", () =>
      editTodo(todoInput, li, confirmBtn, delBtn),
    );
  });
});

function editTodo(todoInput, li, confirmBtn, delBtn) {
  li.innerText = todoInput.value;

  confirmBtn.replaceWith(delBtn);
  todoInput.replaceWith(li);
}
