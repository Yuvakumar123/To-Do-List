const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="completeBtn">Complete</button>
  `;

  const completeBtn = taskItem.querySelector(".completeBtn");
  completeBtn.addEventListener("click", completeTask);

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function completeTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.style.textDecoration = "line-through";
  taskItem.querySelector(".completeBtn").remove();
}
