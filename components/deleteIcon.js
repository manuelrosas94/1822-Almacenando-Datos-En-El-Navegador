import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  const task =JSON.parse(localStorage.getItem("task"));
  const index = task.findIndex( (item) => item.id == id);
  // console.log(index);
  task.splice(index, 1);
  li.innerHTML = "";
  // console.log(task);
  localStorage.setItem("task", JSON.stringify(task));
  displayTasks();
  // console.log("id", id)
  // const parent = event.target.parentElement;
  // parent.remove();
};

export default deleteIcon;
