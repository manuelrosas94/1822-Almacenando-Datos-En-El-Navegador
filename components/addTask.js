import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    // console.log(taskList);
    // console.log(dateFormat);

    if(value == "" || date == ""){
        console.log("No crear la tarea");
        return;
    }

    input.value = '';
    calendar.value = '';

    const complete = false;

     // console.log(value, dateFormat);
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    taskList.push(taskObj);
    localStorage.setItem("task", JSON.stringify(taskList));// sessionStorage la informacion se guarda pero si se refresca la pagina la informacion se pierde

    displayTasks();

  // se eliminan las 2 lineas de abajo
  //   const task = createTask(taskObj);
  //   list.appendChild(task);
};

export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
        task.classList.add('card');

        //backticks
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if(complete){
        // console.log("Completada");
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElemente = document.createElement('span');
        dateElemente.innerHTML = dateFormat;

        task.appendChild(taskContent);
        task.appendChild(dateElemente);
        task.appendChild(deleteIcon(id));
    return task;
};