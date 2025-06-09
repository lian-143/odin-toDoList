/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\nconst projectForm = document.querySelector(\"[data-projectList-form]\");\nconst inputProjectValue = document.querySelector(\"[data-projectList-input]\");\nconst projectListContainer = document.querySelector(\"[data-lists]\");\n\n// task\nconst taskForm = document.querySelector(\"[data-taskList-form]\");\nconst inputTaskValue = document.querySelector(\"[data-taskList-input]\");\nconst taskContainer = document.querySelector(\"[data-tasks]\");\nconst taskTemplate = document.getElementById(\"taskTemplate\");\n\nlet currentProjectId = null;\n\n// form submission for new project\nprojectForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (!projectForm || !inputProjectValue) {\n    console.error(\"Form is invalid\");\n  } else {\n    // get the value from input\n    const name = inputProjectValue.value;\n    if (!name) return;\n    const projectList = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    console.log(projectList);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.push(projectList);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    // render it to the list\n    inputProjectValue.value = null;\n    renderList();\n  }\n});\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const taskName = inputTaskValue.value;\n  if (taskName == null || taskName === \"\") return;\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName);\n  const selectedList = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n  if (!selectedList) return;\n  selectedList.tasks.push(task);\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n  inputTaskValue.value = null;\n  renderTasks();\n});\n\nfunction renderList() {\n  projectListContainer.innerHTML = null;\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.forEach((todo) => {\n    const li = document.createElement(\"li\");\n\n    const span = document.createElement(\"span\");\n    span.textContent = todo.title;\n    li.appendChild(span);\n\n    const deleteBtn = document.createElement(\"button\");\n    deleteBtn.classList.add(\"deleteBtn\");\n    deleteBtn.textContent = \"⛔\";\n    deleteBtn.dataset.listBtn = todo.id;\n\n    deleteBtn.addEventListener(\"click\", projectDeleteBtn);\n\n    li.appendChild(deleteBtn);\n\n    li.addEventListener(\"click\", (e) => {\n      currentProjectId = todo.id;\n      console.log(\"Selected project:\", todo.title);\n      renderTasks();\n    });\n\n    projectListContainer.appendChild(li);\n  });\n}\n\nfunction renderTasks() {\n  taskContainer.innerHTML = \"\";\n\n  if (!currentProjectId) return;\n  const selectedList = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n  if (!selectedList) return;\n\n  const ul = document.createElement(\"ul\");\n  selectedList.tasks.forEach((task) => {\n    const clone = document.importNode(taskTemplate.content, true);\n    const checkbox = clone.querySelector(\"input[type=checkbox]\");\n    const label = clone.querySelector(\"label\");\n    const deleteBtn = clone.querySelector(\"button.delete-task\");\n    checkbox.id = task.id;\n    checkbox.checked = task.complete;\n    label.htmlFor = task.id;\n    label.append(task.title);\n    ul.appendChild(clone);\n\n    deleteBtn.dataset.taskBtn = task.id;\n\n    deleteBtn.addEventListener(\"click\", taskDeleteBtn);\n  });\n\n  taskContainer.appendChild(ul);\n}\n\nfunction projectDeleteBtn(e) {\n  e.stopPropagation();\n  const projectId = e.currentTarget.dataset.listBtn;\n  let index = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.findIndex(\n    (projectItem) => projectItem.id === projectId\n  );\n  if (index > -1) {\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.splice(index, 1);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    renderList();\n    renderTasks();\n  }\n}\n\nfunction taskDeleteBtn(e) {\n  e.stopPropagation();\n  const selectedList = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n  if (!selectedList) return;\n\n  const taskId = e.currentTarget.dataset.taskBtn;\n  let index = selectedList.tasks.findIndex(\n    (taskItem) => taskItem.id === taskId\n  );\n  if (index > -1) {\n    selectedList.tasks.splice(index, 1);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    renderList();\n    renderTasks();\n  }\n}\n\nrenderList();\nrenderTasks();\n\n\n//# sourceURL=webpack://odin-todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n// const toDoList = new createProject(\"Backlogs\");\n// const task1 = new createTask(\"hello world\", \"hehe\", \"high\");\n\n// toDoList.addTask(task1);\n// console.log(toDoList.getTasks());\n\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectLists: () => (/* binding */ projectLists),\n/* harmony export */   save: () => (/* binding */ save)\n/* harmony export */ });\nconst localStorage_project_key = \"project.key\";\n// const localStorage_task_key = \"task.key\";\n\nlet projectLists =\n  JSON.parse(localStorage.getItem(localStorage_project_key)) || [];\n// export let taskValue = localStorage.getItem(localStorage_task_key);\n\nfunction save() {\n  localStorage.setItem(localStorage_project_key, JSON.stringify(projectLists));\n  // localStorage.setItem(localStorage_task_key, taskValue);\n}\n\n\n//# sourceURL=webpack://odin-todolist/./src/localStorage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    (this.title = title), (this.id = Date.now().toString());\n    this.tasks = [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://odin-todolist/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass createTask {\n  constructor(title, description, priority) {\n    (this.title = title),\n      (this.description = description),\n      (this.priority = priority),\n      (this.dueDate = new Date().toLocaleDateString()),\n      (this.id = Date.now().toString());\n    this.complete = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://odin-todolist/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;