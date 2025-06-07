class createTask {
  constructor(title, description, priority) {
    (this.title = title),
      (this.description = description),
      (this.priority = priority),
      (this.dueDate = new Date().toLocaleDateString()),
      (this.id = Date.now().toString());
    this.complete = false;
  }
}

export default createTask;
