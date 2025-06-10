class createTask {
  constructor(title, description, priority, dueDate) {
    (this.title = title),
      (this.description = description),
      (this.priority = priority),
      (this.dueDate = dueDate),
      (this.id = Date.now().toString());
    this.complete = false;
  }
}

export default createTask;
