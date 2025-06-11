const localStorage_project_key = "project.key";

export let projectLists =
  JSON.parse(localStorage.getItem(localStorage_project_key)) || [];

export function save() {
  localStorage.setItem(localStorage_project_key, JSON.stringify(projectLists));
}
