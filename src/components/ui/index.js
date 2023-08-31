import './style.css';

export default function () {

  const header = document.createElement("header");
  const div1 = document.createElement("div");
  const titleInput = document.createElement("input");
  const titleInputLabel = document.createElement("label")
  const div2 = document.createElement("div");
  const dateInput = document.createElement("input");
  const dateInputLabel = document.createElement("label");
  const addTodoBtn = document.createElement("button");
  const div3 = document.createElement("div");
  const projectTitleInput = document.createElement("input");
  const projectTitleInputLabel = document.createElement("label");
  const addProjectBtn = document.createElement("button");

  titleInputLabel.textContent = "Todo Title";
  div1.appendChild(titleInput);
  div1.appendChild(titleInputLabel);


  dateInputLabel.textContent = "Due date"
  div2.appendChild(dateInput);
  div2.appendChild(dateInputLabel);

  projectTitleInputLabel.textContent = "Project title";
  div3.classList.add("project-input-div")
  div3.appendChild(projectTitleInput);
  div3.appendChild(projectTitleInputLabel);

  dateInput.setAttribute("type", "date");
  addTodoBtn.textContent = "Add Todo";
  addProjectBtn.textContent = "Add Project";


  header.appendChild(div1);
  header.appendChild(div2);
  header.appendChild(addTodoBtn);
  header.appendChild(div3);
  header.appendChild(addProjectBtn);

  return { header, titleInput, dateInput, addTodoBtn, projectTitleInput, addProjectBtn };
}