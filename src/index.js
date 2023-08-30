import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsMain from './components/projects';
import createUI from './components/ui';

const projects = [];
const proj1 = createProject("Today");
projects.push(proj1);
let currentProject = proj1;
let currentProjectIdx = 0;

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
  projects.push(proj);
  changeCurrentProject(projects.length - 1);
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
  divs.forEach(div => div.addEventListener("click", handleTodoProjectClick));
}

function handleTodoProjectClick(e) {
  const todoPara = e.target;
  let todoIdx = e.target.dataset.idx;
  let projectIdx = e.target.dataset.projectIdx;

  if (projectIdx) {
    changeCurrentProject(projectIdx);
    changeCurrentProjectColor();
  }



  if (todoIdx) { // clicked on a todo item
    const input = document.createElement("input");
    const btnChange = document.createElement("button");
    const btnDelete = document.createElement("button");
    input.value = todoPara.textContent;
    todoPara.textContent = "";
    btnChange.textContent = "Change";
    btnDelete.textContent = "Delete";
    btnChange.addEventListener("click", (e) => handleChangeClick(e, input));
    btnDelete.addEventListener("click", handleDeleteClick);
    todoPara.appendChild(input);
    todoPara.appendChild(btnChange);
    todoPara.appendChild(btnDelete);
    input.focus();
  } else if (projectIdx) { // clicked on a h1, ie. project title
    // TODO(Kiril): add an input and a button to change project title
  }

  function handleChangeClick(e, input) {
    e.stopPropagation();
    const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
    theTodoItem.setTitle(input.value === "" ? theTodoItem.getTitle() : input.value);
    todoPara.textContent = theTodoItem.getTitle();
  }

  function handleDeleteClick(e) {
    e.stopPropagation(); 
    const proj = projects[projectIdx];
    proj.deleteTodo(todoIdx);
    replaceMain();
  }

}

function changeCurrentProject(idx) {
  currentProject = projects[idx];
  currentProjectIdx = idx;
}

function changeCurrentProjectColor() {
  const divs = document.querySelectorAll("main > div");
  divs.forEach(div => {
    div.classList.remove("currentProject");
  });

  const theCurrentProjectDiv = document.querySelector(`main > div[data-project-idx="${currentProjectIdx}"]`);
  theCurrentProjectDiv.classList.add("currentProject");

}