import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsMain from './components/projects';
import createUI from './components/ui';
import createTodoModifyContents from './components/projects/todoModifyContents';
import createTodoContents from './components/projects/todoContents';

const projects = [];
const proj1 = createProject("Today");
projects.push(proj1);
let currentProject = proj1;
let currentProjectIdx = 0;

const body = document.querySelector("body");
const { header, titleInput, dateInput, addTodoBtn, projectTitleInput, addProjectBtn } = createUI();
const main = createProjectsMain(projects);
body.appendChild(header);
body.appendChild(main);
attachListenersForTodos();
changeCurrentProjectColor();

addTodoBtn.addEventListener("click", handleAddTodo)
addProjectBtn.addEventListener("click", handleAddProject)


function handleAddTodo() {
  if (titleInput.value === "") return;
  const dateNow = new Date();
  const monthNow = (dateNow.getMonth() + 1).toString().padStart(2, "0");
  const dayNow = (dateNow.getDate() + 1).toString().padStart(2, "0");
  const date = dateInput.value === "" ? `${dateNow.getFullYear()}-${monthNow}-${dayNow}` : dateInput.value;
  const item1 = createTodo(titleInput.value, "description", date);
  currentProject.addTodo(item1);
  replaceMain();
}

function handleAddProject() {
  if (projectTitleInput.value === "") return;
  const proj = createProject(projectTitleInput.value);
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
  const headings = document.querySelectorAll("main > div > h1");
  headings.forEach(h => h.addEventListener("click", handleSelectClick));

  function handleSelectClick(e) {
    changeCurrentProject(e.target.dataset.projectIdx);
    changeCurrentProjectColor();
  }

  const todos = document.querySelectorAll(".grid .todo-card");
  todos.forEach(todo => {
    const projectIdx = todo.dataset.projectIdx;
    const todoIdx = todo.dataset.idx;
    const expandBtn = todo.querySelector("button");
    const todoContentDiv = todo.querySelector(".todo-content-div");
    let isExpanded = false;

    expandBtn.addEventListener("click", () => {
      const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
      if (!isExpanded) {
        const { titleDiv, descDiv } = createTodoModifyContents(theTodoItem);
        todoContentDiv.textContent = "";
        todoContentDiv.appendChild(titleDiv);
        todoContentDiv.appendChild(descDiv);
      } else {
        const newTitleInput = todo.querySelector("input");
        const newDescTextarea = todo.querySelector("textarea");
        theTodoItem.setTitle(newTitleInput.value);
        theTodoItem.setDescription(newDescTextarea.value);
        const { dateDiv, titleDiv } = createTodoContents(theTodoItem);
        todoContentDiv.textContent = "";
        todoContentDiv.appendChild(dateDiv);
        todoContentDiv.appendChild(titleDiv);
      }
      isExpanded = !isExpanded;
    });

  });

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