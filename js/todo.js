const todoForm = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let todo =[]

function saveTodo(){
    localStorage.setItem("todo" , JSON.stringify(todo));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}
function painTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText(newTodo);
    button.innerText="x";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    
    todoInput.value = "";
    todo.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);
