const todoForm = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

function painTodo(newTodo){
    console.log("i will paint")
}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    console.log(newTodo);
    todoInput.value = "";
    console.log(newTodo, todoInput.value, "todoValue")
}

todoForm.addEventListener("submit", handleTodoSubmit);