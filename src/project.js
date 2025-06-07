import createTask from "./task";

class Project {
  constructor(title) {
    (this.title = title), (this.id = Date.now().toString());
    this.tasks = [];
  }

  addTask(task) {
    if (task instanceof createTask) {
      this.tasks.push(task);
    } else {
      console.error("addTask expects an instance of Task");
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
  }

  getTasks() {
    return this.tasks;
  }
}

export default Project;
