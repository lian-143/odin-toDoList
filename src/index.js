import createProject from "./project";
import createTask from "./task";
import "./dom.js";

const toDoList = new createProject("Backlogs");
const task1 = new createTask("hello world", "hehe", "high");

toDoList.addTask(task1);
// toDoList.deleteTask(Date.now().toString());
console.log(toDoList.getTasks());
