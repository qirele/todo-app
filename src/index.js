import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsMain from './components/projects';
import createUI from './components/ui';

const projects = [];
const proj1 = createProject("Today");
let currentProject = proj1;
let currentProjectIdx = 0;
projects.push(currentProject);

const body = document.querySelector("body");
const { div, input, addTodoBtn, addProjectBtn } = createUI();
const main = createProjectsMain(projects);
body.appendChild(div);
body.appendChild(main);
attachListenersForTodos();
changeCurrentProjectColor();

addTodoBtn.addEventListener("click", handleAddTodo)
addProjectBtn.addEventListener("click", handleAddProject)


function handleAddTodo() {
  if (input.value === "") return;
  const item1 = createTodo(input.value, "description");
  currentProject.addTodo(item1);
  replaceMain();
}

function handleAddProject() {
  if (input.value === "") return;
  const proj = createProject(input.value);
  currentProject = proj;
  projects.push(currentProject);
  currentProjectIdx = projects.length - 1;
  replaceMain();
}

function replaceMain() {
  const newMain = createProjectsMain(projects);
  const oldMain = document.querySelector("main");
  oldMain.remove();
  body.appendChild(newMain);
  attachListenersForTodos();
  changeCurrentProjectColor();
}

function attachListenersForTodos() {
  const divs = document.querySelectorAll("main > div"); // TODO(Kiril) : make this selector more specific
  divs.forEach(div => div.addEventListener("click", handleDivClick));
}

function handleDivClick(e) {
  const todoPara = e.target;
  let todoIdx = e.target.dataset.idx;
  let projectIdx = e.target.dataset.projectIdx;

  if (projectIdx) {
    changeCurrentProject(projectIdx);
    changeCurrentProjectColor(projectIdx);
  }



  if (todoIdx) { // clicked on a todo item
    todoPara.textContent = "";
    const input = document.createElement("input");
    const btn = document.createElement("button");
    btn.textContent = "Change";
    btn.addEventListener("click", (e) => handleChangeClick(e, input));
    todoPara.appendChild(input);
    todoPara.appendChild(btn);
  } else if (projectIdx) { // clicked on a h1, ie. project title
    // TODO(Kiril): add an input and a button to change project title
  }

  function handleChangeClick(e, input) {
    e.stopPropagation();
    const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
    theTodoItem.setTitle(input.value === "" ? theTodoItem.getTitle() : input.value);
    todoPara.textContent = theTodoItem.getTitle();
  }

}

function changeCurrentProject(idx) {
  currentProject = projects[idx];
}

function changeCurrentProjectColor(idx) {
  const divs = document.querySelectorAll("main > div");
  divs.forEach(div => {
    div.classList.remove("currentProject");
  });

  const theCurrentProjectDiv = document.querySelector(`main > div[data-project-idx="${idx ? idx : currentProjectIdx}"]`);
  theCurrentProjectDiv.classList.add("currentProject");

}