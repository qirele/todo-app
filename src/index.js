import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';
import createProjectsMain from './components/projects';
import createUI from './components/ui';
import createTodoModifyContents from './components/projects/todoModifyContents';
import createTodoContents from './components/projects/todoContents';

let projects, currentProjectIdx;
if (!localStorage.getItem("projects")) {
  // initial load default state
  projects = [];
  projects.push(createProject("Today"));
  currentProjectIdx = 0;
  projects[currentProjectIdx].addTodo(createTodo("do tomfoolery", "desc", "2023-09-04"));
  projects[currentProjectIdx].addTodo(createTodo("create mischief", "desc", "2023-09-04"));
  updateLocalStorage();
} else {
  projects = [];
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  storedProjects.forEach(proj => {
    const newProject = createProject(proj.project_title);
    proj.todos.forEach(todo => {
      newProject.addTodo(createTodo(todo.title, todo.desc, todo.date));
    });
    projects.push(newProject);
  });
  currentProjectIdx = parseInt(localStorage.getItem("currentProjectIdx"));
}

const body = document.querySelector("body");
const { header, titleInput, dateInput, addTodoBtn, projectTitleInput, addProjectBtn } = createUI();
const main = createProjectsMain(projects);
body.appendChild(header);
body.appendChild(main);
attachListenersForTodos();
changeCurrentProjectColor();

addTodoBtn.addEventListener("click", handleAddTodo)
addProjectBtn.addEventListener("click", handleAddProject)


function updateLocalStorage() {
  let JSONfriendlyProjects = [];

  projects.forEach(proj => {
    let obj = { "project_title": proj.getTitle() };
    obj.todos = [];
    proj.getTodos().forEach(todo => {
      obj.todos.push({ "title": todo.getTitle(), "desc": todo.getDescription(), "date": todo.getDueDate() });
    });

    JSONfriendlyProjects.push(obj);
  });

  localStorage.setItem("projects", JSON.stringify(JSONfriendlyProjects));
  localStorage.setItem("currentProjectIdx", currentProjectIdx);

}

function handleAddTodo() {
  if (titleInput.value === "") return;
  const dateNow = new Date();
  const monthNow = (dateNow.getMonth() + 1).toString().padStart(2, "0");
  const dayNow = (dateNow.getDate()).toString().padStart(2, "0");
  const dateStr = dateInput.value === "" ? `${dateNow.getFullYear()}-${monthNow}-${dayNow}` : dateInput.value;
  const item1 = createTodo(titleInput.value, "description", dateStr);
  projects[currentProjectIdx].addTodo(item1);
  replaceMain();
  updateLocalStorage();
}

function handleAddProject() {
  if (projectTitleInput.value === "") return;
  const proj = createProject(projectTitleInput.value);
  projects.push(proj);
  changeCurrentProject(projects.length - 1);
  replaceMain();
  updateLocalStorage();
}

function replaceMain() {
  if (projects.length === 0) {
    const proj1 = createProject("Today");
    projects.push(proj1);
    changeCurrentProject(0);
  }
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
    updateLocalStorage();
  }

  const deleteProjectBtns = document.querySelectorAll(".delete-project-btn");

  deleteProjectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectToDeleteIdx = btn.parentNode.dataset.projectIdx;
      projects.splice(projectToDeleteIdx, 1);
      changeCurrentProject(0);
      changeCurrentProjectColor();
      replaceMain();
      updateLocalStorage();
    });
  })


  const todos = document.querySelectorAll(".grid .todo-card");
  todos.forEach(todo => {

    const projectIdx = todo.dataset.projectIdx;
    const todoIdx = todo.dataset.idx;
    const expandBtn = todo.querySelector("button");
    const todoContentDiv = todo.querySelector(".todo-content-div");
    let isExpanded = false;

    expandBtn.addEventListener("click", () => {
      changeCurrentProject(projectIdx);
      changeCurrentProjectColor();
      const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
      if (!isExpanded) {
        const { titleDiv, descDiv, deleteTodoBtn } = createTodoModifyContents(theTodoItem);
        todoContentDiv.textContent = "";
        todoContentDiv.appendChild(titleDiv);
        todoContentDiv.appendChild(descDiv);
        todoContentDiv.appendChild(deleteTodoBtn);

        deleteTodoBtn.addEventListener("click", () => {
          projects[projectIdx].deleteTodo(todoIdx);
          replaceMain();
          updateLocalStorage();
        });
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
      updateLocalStorage();
    });


  });

}


function changeCurrentProject(idx) {
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