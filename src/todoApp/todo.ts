let addBtn: any = document.querySelector(".addBtn");
let descriptionInput: any = document.querySelector(".descriptionInput");
let todoNameInput: any = document.querySelector(".todoNameInput");
let todosUl: any = document.querySelector(".todosUl");

let todo: { todo: string; description: string } = { todo: "", description: "" };
let todosArray: string[] = [];
function addTodo() {
  console.log(todoNameInput.value, descriptionInput.value);
  todosUl.insertAdjacentHTML(
    "beforeend",
    `<li class='todosli'> <div>${todoNameInput.value}</div>  <div>${descriptionInput.value}</div> </li>`
  );
}

function updateValue(value: any) {
  descriptionInput.value = value.target.value;
}
function updateValueName(value: any) {
  todoNameInput.value = value.target.value;
}
descriptionInput.addEventListener("change", updateValue);
todoNameInput.addEventListener("change", updateValueName);
addBtn.addEventListener("click", addTodo);
