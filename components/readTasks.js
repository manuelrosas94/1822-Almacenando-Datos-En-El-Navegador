import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import  dateElement  from "./dateElement.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    // console.log(list);

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates);
    // console.log(order);

    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));

        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            // console.log(diff);
            if(diff == 0){
                list.appendChild(createTask(task));
            }
        });
    });    
}
