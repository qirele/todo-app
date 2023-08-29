import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsMain from './components/projects';
import createUI from './components/ui';

let currentProject;
const projects = [];
const proj1 = createProject("Today");
currentProject = proj1;
projects.push(currentProject);

const body = document.querySelector("body");
const { div, input, addTodoBtn, addProjectBtn } = createUI();
const main = createProjectsMain(projects);
body.appendChild(div);
body.appendChild(main);
attachListenersForTodos();

addTodoBtn.addEventListener("click", handleAddTodo)
addProjectBtn.addEventListener("click", handleAddProject)


function handleAddTodo() {
  const item1 = createTodo(input.value, "description");
  currentProject.addTodo(item1);
  replaceMain();
}

function handleAddProject() {
  const proj = createProject(input.value);
  currentProject = proj;
  projects.push(currentProject);
  replaceMain();
}

function replaceMain() {
  const newMain = createProjectsMain(projects);
  const oldMain = document.querySelector("main");
  oldMain.remove();
  body.appendChild(newMain);
  attachListenersForTodos();
}

function attachListenersForTodos() {
  const divs = document.querySelectorAll("main > div");
  divs.forEach(div => div.addEventListener("click", handleDivClick) );
}

function handleDivClick(e) {

  const todoPara = e.target;
  let todoIdx = e.target.dataset.idx;
  let projectIdx = e.target.dataset.projectIdx;

  if (todoIdx) { // clicked on a todo item
    todoPara.textContent = "";
    const input = document.createElement("input");
    const btn = document.createElement("button");
    btn.textContent = "Change";
    btn.addEventListener("click", () => handleTodoClick(input));
    todoPara.appendChild(input);
    todoPara.appendChild(btn);
  } else if (projectIdx) { // clicked on a h1, ie. project title
    // TODO(Kiril): add an input and a button to change project title
  }

  function handleTodoClick(input) {
    const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
    theTodoItem.setTitle(input.value === "" ? theTodoItem.getTitle() : input.value);
    todoPara.textContent = theTodoItem.getTitle();
  }

}