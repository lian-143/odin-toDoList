class Project {
  constructor(title) {
    (this.title = title), (this.id = Date.now().toString());
    this.tasks = [];
  }
}

export default Project;
