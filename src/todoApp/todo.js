var addBtn = document.querySelector(".addBtn");
var descriptionInput = document.querySelector(".descriptionInput");
var todoNameInput = document.querySelector(".todoNameInput");
var todosUl = document.querySelector(".todosUl");
var todo = { todo: "", description: "" };
var todosArray = [];
function addTodo() {
    console.log(todoNameInput.value, descriptionInput.value);
    todosUl.insertAdjacentHTML("beforeend", "<li class='todosli'>".concat(todoNameInput.value, " ").concat(descriptionInput.value, "</li>"));
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
