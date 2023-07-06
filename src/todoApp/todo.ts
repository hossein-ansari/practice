let addBtn: any | null = document.querySelector(".addBtn");
let descriptionInput: any  = document.querySelector(".descriptionInput");
let todoNameInput: any  = document.querySelector(".todoNameInput");

let todo: { todo: string; description: string } = { todo: "", description: "" };
let todosArray: string[] = [];
function addTodo(td:string,desc:string):void {
    console.log(td,desc)
}
if (addBtn != null) {
  addBtn.addEventListener("click", addTodo(todoNameInput.value,descriptionInput.value));
}
