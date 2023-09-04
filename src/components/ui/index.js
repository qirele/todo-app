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

  const div4 = document.createElement("div");
  const importanceSelectLabel = document.createElement("label");
  const importanceSelect = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");


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

  importanceSelectLabel.textContent = "Todo's importance:";
  importanceSelectLabel.setAttribute("for", "importanceSelect");
  importanceSelect.setAttribute("id", "importanceSelect");
  option1.textContent = "High";
  option2.textContent = "Medium";
  option3.textContent = "Low";
  option1.value = "0";
  option2.value = "1";
  option3.value = "2";

  importanceSelect.appendChild(option1);
  importanceSelect.appendChild(option2);
  importanceSelect.appendChild(option3);
  div4.appendChild(importanceSelectLabel);
  div4.appendChild(importanceSelect);


  header.appendChild(div1);
  header.appendChild(div2);
  header.appendChild(div4);
  header.appendChild(addTodoBtn);
  header.appendChild(div3);
  header.appendChild(addProjectBtn);

  return { header, titleInput, dateInput, addTodoBtn, projectTitleInput, importanceSelect, addProjectBtn };
}