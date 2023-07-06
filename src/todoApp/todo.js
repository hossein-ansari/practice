var addBtn = document.querySelector(".addBtn");
var descriptionInput = document.querySelector(".descriptionInput");
var todoNameInput = document.querySelector(".todoNameInput");
var todos = document.querySelector(".todos");
var todo = { todo: "", description: "" };
var todosArray = [];
function addTodo() {
    console.log(todoNameInput.value, descriptionInput.value);
    todos.insertAdjacentHTML("afterend", "<li>".concat(todoNameInput.value, " ").concat(descriptionInput.value, "</li>"));
}
function updateValue(value) {
    descriptionInput.value = value.target.value;
}
function updateValueName(value) {
    todoNameInput.value = value.target.value;
}
descriptionInput.addEventListener("change", updateValue);
todoNameInput.addEventListener("change", updateValueName);
addBtn.addEventListener("click", addTodo);
