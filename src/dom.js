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
const dialogElem = document.getElementById("dialog");

let currentProjectId = null;
let editId = null;
let mode = "add";

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
  const project = storage.projectLists.find(
    (list) => list.id === currentProjectId
  );

  if (!taskName || !taskDescription || !taskDate) return;
  if (!project) return;

  if (mode === "add") {
    const task = new createTask(
      taskName,
      taskDescription,
      taskPriority,
      taskDate
    );

    project.tasks.push(task);
    storage.save();

    inputTaskTitle.value = "";
    inputTaskDescription.value = "";
    inputTaskDate.value = "";
    inputTaskPriority.value = "Low"; // Reset to default priority
  } else if (mode === "edit") {
    const task = project.tasks.find((task) => task.id === editId);
    task.title = taskName;
    task.description = taskDescription;
    task.dueDate = taskDate;
    task.priority = taskPriority;
  }

  storage.save();
  renderList();
  renderTasks();
  renderTaskCount();
});

function defaultProject() {
  if (storage.projectLists.length === 0) {
    const defaultProj = new Project("Default");
    let currentDate = new Date().toISOString().slice(0, 10);

    const defaultTask = new createTask(
      "Complete UI Design",
      "Responsive website",
      "Low",
      currentDate
    );

    defaultProj.tasks.push(defaultTask);
    storage.projectLists.push(defaultProj);
    storage.save();
  }
  currentProjectId = storage.projectLists[0].id;
  projectName.textContent = storage.projectLists[0].title;
  renderList();
  renderTasks();
}

function renderList() {
  projectListContainer.innerHTML = "";
  storage.projectLists.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    li.dataset.listId = project.id;
    const div = document.createElement("div");
    div.classList.add("projectBtnContainer");
    li.appendChild(div);

    if (project.id === currentProjectId) li.classList.add("selected");

    const editBtn = document.createElement("button");
    editBtn.dataset.editListBtn = project.id;
    editBtn.classList.add("editBtn");
    editBtn.textContent = "✍️";
    editBtn.addEventListener("click", editBtnModal);
    div.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    const image = document.createElement("img");
    image.src = require("./images/delete.png");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.appendChild(image);
    deleteBtn.dataset.listBtn = project.id;
    deleteBtn.addEventListener("click", projectDeleteBtn);
    div.appendChild(deleteBtn);

    li.addEventListener("click", (e) => {
      currentProjectId = project.id;
      projectName.textContent = project.title;
      renderTasks();
      renderTaskCount();
    });
    projectListContainer.appendChild(li);
  });
  renderTaskCount();
}

function openAddModal() {
  const closeBtn = document.querySelector(".close");
  const saveBtnTask = document.querySelector(".saveBtnTask");
  const addTaskBtn = document.querySelector("button.showProject");

  mode = "add";
  editId = null;

  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", () => {
      dialogElem.showModal();
    });
  }

  saveBtnTask.addEventListener("click", () => {
    dialogElem.close();
  });

  closeBtn.addEventListener("click", () => {
    dialogElem.close();
  });
}

openAddModal();

function openEditModal(taskId) {
  const closeBtn = document.querySelector(".close");
  const saveBtnTask = document.querySelector(".saveBtnTask");

  mode = "edit";
  editId = taskId;

  // objects of tasks
  const task = storage.projectLists
    .find((project) => project.id === currentProjectId)
    .tasks.find((task) => task.id === editId);

  saveBtnTask.addEventListener("click", () => {
    if (
      inputTaskTitle.value === task.title &&
      inputTaskDescription.value === task.description &&
      inputTaskDate.value === task.dueDate &&
      inputTaskPriority.value === task.priority
    ) {
      dialogElem.close();
      return;
    }
  });

  closeBtn.addEventListener("click", () => {
    dialogElem.close();
  });

  inputTaskTitle.value = task.title;
  inputTaskDescription.value = task.description;
  inputTaskDate.value = task.dueDate;
  inputTaskPriority.value = task.priority;
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
  ul.classList.add("task-card");
  project.tasks.forEach((task) => {
    const clone = document.importNode(taskTemplate.content, true);
    const checkbox = clone.querySelector("input[type=checkbox]");
    const labelTitle = clone.querySelector("label");
    const domDescription = clone.querySelector("p#domDescription");
    const domDate = clone.querySelector("p#domDate");
    const editTaskBtn = clone.querySelector("button.editTaskBtn");
    const deleteBtn = clone.querySelector("button.taskDeleteBtn");

    checkbox.id = `task-${task.id}`;
    checkbox.classList.add("checkBoxAlignment");
    labelTitle.htmlFor = `task-${task.id}`;
    labelTitle.append(task.title);
    domDescription.append(task.description);
    domDate.append(task.dueDate);
    ul.appendChild(clone);

    checkbox.checked = task.complete;
    if (task.complete) {
      labelTitle.style.textDecoration = "line-through";
    } else {
      labelTitle.style.textDecoration = "none";
    }

    checkbox.addEventListener("click", (e) => {
      task.complete = e.target.checked;
      if (task.complete) {
        labelTitle.style.textDecoration = "line-through";
      } else {
        labelTitle.style.textDecoration = "none";
      }

      storage.save();
      renderTaskCount();
    });

    // edit button functionality
    if (editTaskBtn) {
      editTaskBtn.dataset.taskBtn = task.id;
      editTaskBtn.textContent = "✍️";
      editTaskBtn.addEventListener("click", () => {
        openEditModal(task.id);
        dialogElem.showModal();
      });
    } else {
      console.error("editTaskBtn is missing in the template.");
    }

    // delete button functionality
    const image = document.createElement("img");
    image.src = require("./images/delete.png");
    deleteBtn.style.backgroundImage = image;
    deleteBtn.dataset.taskBtn = task.id;
    deleteBtn.appendChild(image);
    deleteBtn.addEventListener("click", taskDeleteBtn);
  });

  taskContainer.appendChild(ul);
  renderTaskCount();
  storage.save();
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

  inputTaskTitle.value = "";
  inputTaskDescription.value = "";
  inputTaskDate.value = "";
  inputTaskPriority.value = "Low"; // Reset to default priority
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

  inputTaskTitle.value = "";
  inputTaskDescription.value = "";
  inputTaskDate.value = "";
  inputTaskPriority.value = "Low"; // Reset to default priority
}

function editBtnModal(e) {
  const dialogElemProject = document.getElementById("dialogProject");
  const saveBtnProject = document.querySelector(".saveBtnProject");
  let input = document.querySelector("[data-projectList-modal]");

  // everytime you click edit button, a dialog of input add project will appear
  dialogElemProject.showModal();

  let projectId = e.currentTarget.dataset.editListBtn;

  const project = storage.projectLists.find(
    (selected) => selected.id === projectId
  );
  if (!project) return;

  saveBtnProject.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      if (!input.value) {
        dialogElemProject.close();
        return;
      }

      if (projectId === project.id) {
        project.title = input.value;
        projectName.textContent = project.title;
        storage.save();
        dialogElemProject.close();
        renderList();
      }
    },
    { once: true }
  );
  input.value = project.title;
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
}

renderList();
renderTasks();
renderTaskCount();
defaultProject();
