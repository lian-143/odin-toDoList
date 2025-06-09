const localStorage_project_key = "project.key";
// const localStorage_task_key = "task.key";

export let projectLists =
  JSON.parse(localStorage.getItem(localStorage_project_key)) || [];
// export let taskValue = localStorage.getItem(localStorage_task_key);

export function save() {
  localStorage.setItem(localStorage_project_key, JSON.stringify(projectLists));
  // localStorage.setItem(localStorage_task_key, taskValue);
}
