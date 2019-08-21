const myList = document.querySelector("#my-list ol");
const toDoInput = document.getElementById("to-do-input");
const addToDo = document.getElementById("add-to-do");

function buttonClick(string) {
  const toDo = toDoInput.value ? toDoInput.value : string;
  const newToDo = document.createElement("li");
  newToDo.innerText = toDo;
  newToDo.addEventListener("click", newToDo.remove)
  myList.appendChild(newToDo);
  toDoInput.value = "";
}

addToDo.addEventListener("click", buttonClick);

const dayInTheLife = ["Wake up.", "Get out of bed.", "Drag a comb across my head."];
dayInTheLife.forEach(toDoItem => buttonClick(toDoItem))