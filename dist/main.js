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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-columns: 4em 1fr 2fr 4em;\n  grid-template-areas: \"... project tasks ...\";\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nbutton {\n  border: none;\n  cursor: pointer;\n}\n\nli {\n  margin: 3em 0;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: space-between;\n}\n\nimg {\n  width: 1em;\n  height: 1em;\n  object-fit: cover;\n}\n\n.project-container {\n  background-color: #222831;\n  grid-area: project;\n  grid-column: 1/3;\n}\n\n.toDoListContainer {\n  background-color: #393e46;\n  grid-area: tasks;\n  grid-column: 3/-1;\n}\n\n.todoGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \"header header\";\n}\n\n.project-container,\n.toDoListContainer {\n  padding: 4em;\n  color: #fff;\n  overflow: auto;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.projectForm {\n  margin: 2em 0;\n  display: flex;\n  gap: 0.8em;\n}\n\nh1.projectName {\n  grid-column: 1/-1;\n}\n\n.lightBtn {\n  background-color: #a4b465;\n  cursor: pointer;\n}\n\n.lightBtn:hover,\nli:hover {\n  color: #222831;\n  background-color: #ffcf50;\n}\n\nli:hover {\n  padding: 0.8em;\n  font-size: 1.1rem;\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton.saveBtn {\n  border-radius: 0.2em;\n  padding: 0.5em 1em;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\nbutton.deleteBtn,\nbutton.taskDeleteBtn {\n  background: transparent;\n}\n\nbutton.deleteBtn:hover {\n  background-color: #ffa09b;\n  border-radius: 10%;\n  padding: 0.5em;\n}\n\nbutton.taskDeleteBtn {\n  background-color: #393e46;\n}\n\ninput#project-name {\n  border-radius: 0.5em;\n  padding: 0.7em;\n  border: none;\n  font-weight: 500;\n}\n\nul.allProjects {\n  list-style-type: none;\n  margin-left: 0.5em;\n  padding: 0;\n  cursor: pointer;\n}\n\n/* task */\n.toDoHeader {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.show.lightBtn {\n  grid-column: 1/-1;\n  margin: 1.5em 0;\n  padding: 0.6em 0;\n  border-radius: 0.4em;\n  font-weight: 500;\n}\n\ndiv.taskLists {\n  grid-column: 1/ -1;\n}\n\ndiv.taskContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 2em 0;\n}\n\nul.task-card {\n  padding: 0;\n}\n\ndiv.taskNameGrid > label,\ndiv.taskNameGrid > input {\n  cursor: pointer;\n}\n\ndiv.taskNameGrid > label {\n  font-size: 1.2em;\n}\n\ndiv.taskNameGrid > input {\n  margin-right: 0.2em;\n  min-height: 1em;\n}\n\np#domDescription {\n  font-size: 0.8em;\n}\n\np#priority {\n  justify-self: center;\n}\n\ndiv.dueDate {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\nbutton.taskDeleteBtn {\n  justify-self: end;\n  align-self: start;\n}\n\nbutton.taskDeleteBtn:hover {\n  background-color: #ffa09b;\n  border-radius: 0.2em;\n  padding: 0.4em;\n}\n\n/* modal */\n\ndialog {\n  margin: auto;\n  width: 500px;\n  text-align: center;\n  font-size: 1.2em;\n}\n\ndiv.taskFormContainer {\n  padding: 1em;\n}\n\ndiv.inputDescriptionForm,\ndiv.formBtn {\n  margin: 1em 0;\n}\n\ninput#date {\n  margin-right: 1em;\n}\n\nbutton.close,\nbutton.saveBtnTask {\n  padding: 0.3em 0.8em;\n  border-radius: 0.2em;\n  color: #fff;\n  font-weight: 500;\n}\n\nbutton.close {\n  background-color: #ff3f33;\n  margin-right: 5em;\n}\n\nbutton.close:hover {\n  background-color: #f06359;\n}\n\nbutton.saveBtnTask {\n  background-color: #a4b465;\n}\n\nbutton.saveBtnTask:hover {\n  background-color: #bdcf76;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\nconst projectForm = document.querySelector(\"[data-projectList-form]\");\nconst inputProjectValue = document.querySelector(\"[data-projectList-input]\");\nconst projectListContainer = document.querySelector(\"[data-lists]\");\nconst projectName = document.querySelector(\".projectName\");\n\n// task\nconst taskForm = document.querySelector(\"[data-taskList-form]\");\nconst inputTaskTitle = document.querySelector(\"[data-taskList-title]\");\nconst inputTaskDescription = document.querySelector(\n  \"[data-taskList-description]\"\n);\nconst inputTaskDate = document.querySelector(\"[data-taskList-date]\");\nconst inputTaskPriority = document.querySelector(\"[data-taskList-priority]\");\nconst taskContainer = document.querySelector(\"[data-tasks]\");\nconst taskTemplate = document.getElementById(\"taskTemplate\");\n\nlet currentProjectId = null;\n\n// form submission for new project\nprojectForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (!projectForm || !inputProjectValue) {\n    console.error(\"Form is invalid\");\n  } else {\n    // get the value from input\n    const name = inputProjectValue.value;\n    if (!name) return;\n    const projectList = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    console.log(projectList);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.push(projectList);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    // render it to the list\n    inputProjectValue.value = null;\n    renderList();\n  }\n});\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const taskName = inputTaskTitle.value;\n  const taskDescription = inputTaskDescription.value;\n  const taskDate = inputTaskDate.value;\n  const taskPriority = inputTaskPriority.value;\n\n  if (!taskName || !taskDescription || !taskDate) return;\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    taskName,\n    taskDescription,\n    taskPriority,\n    taskDate\n  );\n\n  const project = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n\n  if (!project) return;\n  project.tasks.push(task);\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n  // reset\n  inputTaskTitle.value = null;\n  inputTaskDescription.value = null;\n  inputTaskDate.value = null;\n  inputTaskPriority.value = \"Low\";\n\n  renderTasks();\n  renderTaskCount();\n});\n\nfunction defaultProject() {\n  if (_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.length === 0) {\n    const defaultProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\");\n    let currentDate = new Date().toISOString().slice(0, 10);\n\n    const defaultTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      \"Complete UI Design\",\n      \"Responsive website\",\n      \"Low\",\n      currentDate\n    );\n\n    defaultProj.tasks.push(defaultTask);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.push(defaultProj);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n  }\n  currentProjectId = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists[0].id;\n  projectName.textContent = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists[0].title;\n  renderList();\n  renderTasks();\n  // editBtnModal();\n}\n\nfunction renderList() {\n  projectListContainer.innerHTML = \"\";\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.forEach((project) => {\n    const li = document.createElement(\"li\");\n    li.textContent = project.title;\n    li.dataset.listId = project.id;\n    if (project.id === currentProjectId) li.classList.add(\"selected\");\n\n    const editBtn = document.createElement(\"button\");\n    editBtn.dataset.editListBtn = project.id;\n    editBtn.classList.add(\"editBtn\");\n    editBtn.textContent = \"✍️\";\n    editBtn.addEventListener(\"click\", editBtnModal);\n    li.appendChild(editBtn);\n\n    const deleteBtn = document.createElement(\"button\");\n    const image = document.createElement(\"img\");\n    image.src = __webpack_require__(/*! ./images/delete.png */ \"./src/images/delete.png\");\n    deleteBtn.classList.add(\"deleteBtn\");\n    deleteBtn.appendChild(image);\n    deleteBtn.dataset.listBtn = project.id;\n    deleteBtn.addEventListener(\"click\", projectDeleteBtn);\n    li.appendChild(deleteBtn);\n\n    li.addEventListener(\"click\", (e) => {\n      currentProjectId = project.id;\n      projectName.textContent = project.title;\n      renderTasks();\n      renderTaskCount();\n    });\n    projectListContainer.appendChild(li);\n  });\n  renderTaskCount();\n}\n\nfunction renderTasks() {\n  taskContainer.innerHTML = \"\";\n\n  if (!currentProjectId) return;\n  const project = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n  if (!project) return;\n\n  const order = { high: 0, medium: 1, low: 2 };\n  project.tasks.sort(\n    (a, b) => order[a.priority.toLowerCase()] - order[b.priority.toLowerCase()]\n  );\n\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"task-card\");\n  project.tasks.forEach((task) => {\n    const clone = document.importNode(taskTemplate.content, true);\n    const checkbox = clone.querySelector(\"input[type=checkbox]\");\n    const labelTitle = clone.querySelector(\"label\");\n    const domDescription = clone.querySelector(\"p#domDescription\");\n    const domDate = clone.querySelector(\"p#domDate\");\n    const domPriority = clone.querySelector(\"p#priority\");\n    const deleteBtn = clone.querySelector(\"button.taskDeleteBtn\");\n    checkbox.id = task.id;\n    checkbox.classList.add(\"checkBoxAlignment\");\n    labelTitle.htmlFor = task.id;\n    labelTitle.append(task.title);\n    domDescription.append(task.description);\n    domDate.append(task.dueDate);\n    domPriority.append(task.priority);\n    ul.appendChild(clone);\n\n    checkbox.addEventListener(\"click\", (e) => {\n      task.complete = e.target.checked;\n      _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n      renderTaskCount();\n    });\n\n    const image = document.createElement(\"img\");\n    image.src = __webpack_require__(/*! ./images/delete.png */ \"./src/images/delete.png\");\n    deleteBtn.style.backgroundImage = image;\n    deleteBtn.dataset.taskBtn = task.id;\n    deleteBtn.appendChild(image);\n    deleteBtn.addEventListener(\"click\", taskDeleteBtn);\n  });\n\n  taskContainer.appendChild(ul);\n  renderTaskCount();\n}\n\nfunction modalForm() {\n  const dialogElem = document.getElementById(\"dialog\");\n  const showBtn = document.querySelector(\".show\");\n  const closeBtn = document.querySelector(\".close\");\n  const saveBtnTask = document.querySelector(\".saveBtnTask\");\n\n  showBtn.addEventListener(\"click\", () => {\n    dialogElem.showModal();\n  });\n\n  closeBtn.addEventListener(\"click\", () => {\n    dialogElem.close();\n  });\n\n  saveBtnTask.addEventListener(\"click\", () => {\n    dialogElem.close();\n  });\n}\n\nfunction projectDeleteBtn(e) {\n  e.stopPropagation();\n  const projectId = e.currentTarget.dataset.listBtn;\n  let index = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.findIndex(\n    (projectItem) => projectItem.id === projectId\n  );\n  if (index > -1) {\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.splice(index, 1);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    renderList();\n    renderTasks();\n    renderTaskCount();\n  }\n}\n\nfunction taskDeleteBtn(e) {\n  e.stopPropagation();\n  const project = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n  if (!project) return;\n\n  const taskId = e.currentTarget.dataset.taskBtn;\n  let index = project.tasks.findIndex((taskItem) => taskItem.id === taskId);\n  if (index > -1) {\n    project.tasks.splice(index, 1);\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n    renderList();\n    renderTasks();\n    renderTaskCount();\n  }\n}\n\nfunction editBtnModal(e) {\n  const dialogElemProject = document.getElementById(\"dialogProject\");\n  const saveBtnProject = document.querySelector(\".saveBtnProject\");\n  let input = document.querySelector(\"[data-projectList-modal]\");\n\n  // everytime you click edit button, a dialog of input add project will appear\n  dialogElemProject.showModal();\n\n  let projectId = e.currentTarget.dataset.editListBtn;\n\n  const project = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (selected) => selected.id === projectId\n  );\n  if (!project) return;\n\n  saveBtnProject.addEventListener(\n    \"click\",\n    (e) => {\n      e.preventDefault();\n      if (!input.value) {\n        dialogElemProject.close();\n        return;\n      }\n\n      if (projectId === project.id) {\n        project.title = input.value;\n        projectName.textContent = project.title;\n        _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.save();\n        dialogElemProject.close();\n        renderList();\n      }\n    },\n    { once: true }\n  );\n  input.value = \"\";\n}\n\nfunction renderTaskCount() {\n  const taskCount = document.getElementById(\"taskCount\");\n  const project = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.projectLists.find(\n    (list) => list.id === currentProjectId\n  );\n\n  if (!project) return;\n\n  // if not checked, render the count of tasks\n  const incompleteTaskCount = project.tasks.filter(\n    (task) => !task.complete\n  ).length;\n  if (incompleteTaskCount > 1) {\n    taskCount.textContent = `${incompleteTaskCount} tasks remaining`;\n  } else if (incompleteTaskCount === 1) {\n    taskCount.textContent = \"1 task remaining\";\n  } else {\n    taskCount.textContent = \"0 task remaining\";\n  }\n}\n\nmodalForm();\nrenderList();\nrenderTasks();\nrenderTaskCount();\ndefaultProject();\n\n\n//# sourceURL=webpack://odin-todolist/./src/dom.js?");

/***/ }),

/***/ "./src/images/delete.png":
/*!*******************************!*\
  !*** ./src/images/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9739be90b41d616bb2c.png\";\n\n//# sourceURL=webpack://odin-todolist/./src/images/delete.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectLists: () => (/* binding */ projectLists),\n/* harmony export */   save: () => (/* binding */ save)\n/* harmony export */ });\nconst localStorage_project_key = \"project.key\";\n\nlet projectLists =\n  JSON.parse(localStorage.getItem(localStorage_project_key)) || [];\n\nfunction save() {\n  localStorage.setItem(localStorage_project_key, JSON.stringify(projectLists));\n}\n\n\n//# sourceURL=webpack://odin-todolist/./src/localStorage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    (this.title = title), (this.id = Date.now().toString());\n    this.tasks = [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://odin-todolist/./src/project.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass createTask {\n  constructor(title, description, priority, dueDate) {\n    (this.title = title),\n      (this.description = description),\n      (this.priority = priority),\n      (this.dueDate = dueDate),\n      (this.id = Date.now().toString());\n    this.complete = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://odin-todolist/./src/task.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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