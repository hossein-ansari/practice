var addBtn = document.querySelector(".addBtn");
var descriptionInput = document.querySelector(".descriptionInput");
var todoNameInput = document.querySelector(".todoNameInput");
var todo = { todo: "", description: "" };
var todosArray = [];
function addTodo(td, desc) {
    console.log(td, desc);
}
if (addBtn != null) {
    addBtn.addEventListener("click", addTodo(todoNameInput.value, descriptionInput.value));
}
