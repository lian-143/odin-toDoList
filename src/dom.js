import Project from "./project";

const form = document.querySelector("[data-projectList-form]");
const input = document.querySelector("[data-projectList-input]");
const listContainer = document.querySelector("[data-lists]");

const projects = [];

// form submission for new project
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form || !input) {
    console.error("Form is invalid");
  } else {
    // get the value from input
    const name = input.value;
    if (!name) return;
    const projectList = new Project(name);
    projects.push(projectList);
    // render it to the list
    input.value = null;
    renderList();
    console.log(projects);
  }
});

function renderList() {
  listContainer.innerHTML = null;
  // everytime you submit, it will be push to new project list
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    listContainer.appendChild(li);
  });
}

renderList();
