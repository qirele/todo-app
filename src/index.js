import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsView from './components/projects';
import createUI from './components/ui';

let currentProject;
let projectCounter = 0;
const projects = [];
const proj1 = createProject("default", projectCounter);
currentProject = proj1;
projects.push(currentProject);
projectCounter++;

const body = document.querySelector("body");
const {div, input, addTodoBtn, addProjectBtn} = createUI();
body.appendChild(div);

addTodoBtn.addEventListener("click", handleAddTodo)
function handleAddTodo() {
  const item1 = createTodo(input.value, "description");
  currentProject.addTodo(item1);
  createProjectsView(projects);
}

addProjectBtn.addEventListener("click", handleAddProject)
function handleAddProject() {
  const proj = createProject(input.value, projectCounter);
  currentProject = proj;
  projects.push(currentProject);
  projectCounter++;
  createProjectsView(projects);
}


createProjectsView(projects);

// (function () {
//   const item1 = createTodo("Read book", "Ishmael by Daniel Quinn");
//   const item2 = createTodo("Read article", "Moloch by Slate Star Codex");
//   const item3 = createTodo("Watch TV", "The Office 7th season");
//   const proj1 = createProject("Consume content");
//   proj1.addTodo(item1);
//   proj1.addTodo(item2);
//   proj1.addTodo(item3);
//   projects.push(proj1);
// })();

// (function () {
//   const item1 = createTodo("Idea", "Think of good idea");
//   const proj1 = createProject("Create an online business");
//   proj1.addTodo(item1);
//   projects.push(proj1);
// })();