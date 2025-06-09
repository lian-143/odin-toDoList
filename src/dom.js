import Project from "./project";
import createTask from "./task.js";
import * as storage from "./localStorage.js";

const projectForm = document.querySelector("[data-projectList-form]");
const inputProjectValue = document.querySelector("[data-projectList-input]");
const projectListContainer = document.querySelector("[data-lists]");

// task
const taskForm = document.querySelector("[data-taskList-form]");
const inputTaskValue = document.querySelector("[data-taskList-input]");
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
  const taskName = inputTaskValue.value;
  if (taskName == null || taskName === "") return;
  const task = new createTask(taskName);
  const selectedList = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );
  if (!selectedList) return;
  selectedList.tasks.push(task);
  storage.save();
  inputTaskValue.value = null;
  renderTasks();
});

function renderList() {
  projectListContainer.innerHTML = null;
  storage.projectLists.forEach((todo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.title;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "⛔";
    deleteBtn.dataset.listBtn = todo.id;

    deleteBtn.addEventListener("click", projectDeleteBtn);

    li.appendChild(deleteBtn);

    li.addEventListener("click", (e) => {
      currentProjectId = todo.id;
      console.log("Selected project:", todo.title);
      renderTasks();
    });

    projectListContainer.appendChild(li);
  });
}

function renderTasks() {
  taskContainer.innerHTML = "";

  if (!currentProjectId) return;
  const selectedList = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );
  if (!selectedList) return;

  const ul = document.createElement("ul");
  selectedList.tasks.forEach((task) => {
    const clone = document.importNode(taskTemplate.content, true);
    const checkbox = clone.querySelector("input[type=checkbox]");
    const label = clone.querySelector("label");
    const deleteBtn = clone.querySelector("button.delete-task");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    label.htmlFor = task.id;
    label.append(task.title);
    ul.appendChild(clone);

    deleteBtn.dataset.taskBtn = task.id;

    deleteBtn.addEventListener("click", taskDeleteBtn);
  });

  taskContainer.appendChild(ul);
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
  }
}

function taskDeleteBtn(e) {
  e.stopPropagation();
  const selectedList = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );
  if (!selectedList) return;

  const taskId = e.currentTarget.dataset.taskBtn;
  let index = selectedList.tasks.findIndex(
    (taskItem) => taskItem.id === taskId
  );
  if (index > -1) {
    selectedList.tasks.splice(index, 1);
    storage.save();
    renderList();
    renderTasks();
  }
}

renderList();
renderTasks();
