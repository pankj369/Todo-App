const mainTodoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.getElementById("inputValue");

const getTodoListFromLocal = () => {
  return JSON.parse(localStorage.getItem("LandingPage"));
};
const addLocalTodoListStorage=(localTodoList)=>{
  return localStorage.setItem('LandingPage', JSON.stringify(localTodoList));
}
localTodoList = getTodoListFromLocal() || [];
const addTodoDynamicElement = (curElem) => {
  const divElement = document.createElement("div");
  divElement.classList.add("main_todo_div");
  divElement.innerHTML = `<li>${curElem}</li> <button class="deleteBtn">Delete</button>`;
  mainTodoElem.append(divElement);
};

const addTodoList = (e) => {
  e.preventDefault();
  const todoListvalue = inputValue.value.trim();

  inputValue.value = "";

  if (todoListvalue !== "" && !localTodoList.includes(todoListvalue)) {
    localTodoList.push(todoListvalue);
    localTodoList = [...new Set(localTodoList)];
    localStorage.setItem("LandingPage", JSON.stringify(localTodoList));
    addTodoDynamicElement(todoListvalue);
  }
};

const showTodoList = () => {
  console.log(localTodoList);
  localTodoList.forEach((curElem) => {
    addTodoDynamicElement(curElem);
  });
};

showTodoList();

//remove the data
const removeTodoList=(e)=>{
  const todoToRemove=e.target;
  let todoListContent=todoToRemove.previousElementSibling.innerText;
  let parentElem = todoToRemove.parentElement;


  localTodoList=localTodoList.filter((curTodo)=>{
    return  curTodo!== todoListContent;
  })
  
addLocalTodoListStorage(localTodoList);
parentElem.remove();
}

mainTodoElem.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.classList.contains("deleteBtn")){
    removeTodoList(e);
  }
})
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  addTodoList(e);
});