import Project from "./project";
import createTask from "./task.js";
import * as storage from "./localStorage.js";

const projectForm = document.querySelector("[data-projectList-form]");
const inputProjectValue = document.querySelector("[data-projectList-input]");
const projectListContainer = document.querySelector("[data-lists]");
const projectName = document.querySelector(".projectName");

// task
const taskForm = document.querySelector("[data-taskList-form]");
const inputTaskTitle = document.querySelector("[data-taskList-title]");
const inputTaskDescription = document.querySelector(
  "[data-taskList-description]"
);
const inputTaskDate = document.querySelector("[data-taskList-date]");
const inputTaskPriority = document.querySelector("[data-taskList-priority]");
const taskContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("taskTemplate");

let currentProjectId = null;

// form submission for new project
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!projectForm || !inputProjectValue) {
    console.error("Form is invalid");
  } else {
    // get the value from input
    const name = inputProjectValue.value;
    if (!name) return;
    const projectList = new Project(name);
    console.log(projectList);
    storage.projectLists.push(projectList);
    storage.save();
    // render it to the list
    inputProjectValue.value = null;
    renderList();
  }
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = inputTaskTitle.value;
  const taskDescription = inputTaskDescription.value;
  const taskDate = inputTaskDate.value;
  const taskPriority = inputTaskPriority.value;

  if (!taskName || !taskDescription || !taskDate) return;
  const task = new createTask(
    taskName,
    taskDescription,
    taskPriority,
    taskDate
  );

  const project = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );

  if (!project) return;
  project.tasks.push(task);
  storage.save();
  // reset
  inputTaskTitle.value = null;
  inputTaskDescription.value = null;
  inputTaskDate.value = null;
  inputTaskPriority.value = "Low";

  renderTasks();
  renderTaskCount();
});

function defaultProject() {
  if (storage.projectLists.length === 0) {
    const defaultProj = new Project("Default");
    storage.projectLists.push(defaultProj);
    storage.save();
  }

  currentProjectId = storage.projectLists[0].id;
  projectName.textContent = storage.projectLists[0].title;
}

function renderList() {
  projectListContainer.innerHTML = "";
  storage.projectLists.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    li.dataset.listId = project.id;
    if (project.id === currentProjectId) li.classList.add("selected");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "⛔";
    deleteBtn.dataset.listBtn = project.id;

    deleteBtn.addEventListener("click", projectDeleteBtn);

    li.appendChild(deleteBtn);

    li.addEventListener("click", (e) => {
      currentProjectId = project.id;
      projectName.textContent = project.title;
      console.log("Selected project:", project.title);
      renderTasks();
      renderTaskCount();
    });
    projectListContainer.appendChild(li);
  });
  renderTaskCount();
}

function renderTasks() {
  taskContainer.innerHTML = "";

  if (!currentProjectId) return;
  const project = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );
  if (!project) return;

  const order = { high: 0, medium: 1, low: 2 };
  project.tasks.sort(
    (a, b) => order[a.priority.toLowerCase()] - order[b.priority.toLowerCase()]
  );

  const ul = document.createElement("ul");
  project.tasks.forEach((task) => {
    const clone = document.importNode(taskTemplate.content, true);
    const checkbox = clone.querySelector("input[type=checkbox]");
    const labelTitle = clone.querySelector("label");
    const domDescription = clone.querySelector("p#domDescription");
    const domDate = clone.querySelector("p#domDate");
    const domPriority = clone.querySelector("p#priority");
    const deleteBtn = clone.querySelector("button.delete-task");
    checkbox.id = task.id;
    labelTitle.htmlFor = task.id;
    labelTitle.append(task.title);
    domDescription.append(task.description);
    domDate.append(task.dueDate);
    domPriority.append(task.priority);
    ul.appendChild(clone);

    checkbox.addEventListener("click", (e) => {
      task.complete = e.target.checked;
      storage.save();
      renderTaskCount();
    });

    deleteBtn.dataset.taskBtn = task.id;
    console.log(task);
    deleteBtn.addEventListener("click", taskDeleteBtn);
  });

  taskContainer.appendChild(ul);
  renderTaskCount();
}

function modalForm() {
  const dialogElem = document.getElementById("dialog");
  const showBtn = document.querySelector(".show");
  const closeBtn = document.querySelector(".close");
  const saveBtnTask = document.querySelector(".saveBtnTask");

  showBtn.addEventListener("click", () => {
    dialogElem.showModal();
  });

  closeBtn.addEventListener("click", () => {
    dialogElem.close();
  });

  saveBtnTask.addEventListener("click", () => {
    dialogElem.close();
  });
}

function projectDeleteBtn(e) {
  e.stopPropagation();
  const projectId = e.currentTarget.dataset.listBtn;
  let index = storage.projectLists.findIndex(
    (projectItem) => projectItem.id === projectId
  );
  if (index > -1) {
    storage.projectLists.splice(index, 1);
    storage.save();
    renderList();
    renderTasks();
    renderTaskCount();
  }
}

function taskDeleteBtn(e) {
  e.stopPropagation();
  const project = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );
  if (!project) return;

  const taskId = e.currentTarget.dataset.taskBtn;
  let index = project.tasks.findIndex((taskItem) => taskItem.id === taskId);
  if (index > -1) {
    project.tasks.splice(index, 1);
    storage.save();
    renderList();
    renderTasks();
    renderTaskCount();
  }
}

function renderTaskCount() {
  const taskCount = document.getElementById("taskCount");
  const project = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );

  if (!project) return;

  // if not checked, render the count of tasks
  const incompleteTaskCount = project.tasks.filter(
    (task) => !task.complete
  ).length;
  if (incompleteTaskCount > 1) {
    taskCount.textContent = `${incompleteTaskCount} tasks remaining`;
  } else if (incompleteTaskCount === 1) {
    taskCount.textContent = "1 task remaining";
  } else {
    taskCount.textContent = "0 task remaining";
  }
  // console.log(taskCount);
  // console.log(incompleteTaskCount);
}

modalForm();
renderList();
renderTasks();
renderTaskCount();
defaultProject();
