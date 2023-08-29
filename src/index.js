import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsView from './components/projects';
import createUI from './components/ui';

let currentProject;
const projects = [];
const proj1 = createProject("Today");
currentProject = proj1;
projects.push(currentProject);

const body = document.querySelector("body");
const { div, input, addTodoBtn, addProjectBtn } = createUI();
body.appendChild(div);

addTodoBtn.addEventListener("click", handleAddTodo)

addProjectBtn.addEventListener("click", handleAddProject)

createProjectsView(projects);

function handleAddTodo() {
  const item1 = createTodo(input.value, "description");
  currentProject.addTodo(item1);
  createProjectsView(projects);
}

function handleAddProject() {
  const proj = createProject(input.value);
  currentProject = proj;
  projects.push(currentProject);
  createProjectsView(projects);
}
