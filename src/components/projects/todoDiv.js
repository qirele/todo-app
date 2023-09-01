export default function (todo, todoIdx, projectIdx) {

  const todoDiv = document.createElement("div");

  const dateDiv = document.createElement("div");
  const dateLabel = document.createElement("span");
  const dueDate = document.createElement("span");

  const titleDiv = document.createElement("div");
  const titlePara = document.createElement("p");
  const expandBtn = document.createElement("button");

  todoDiv.classList.add("todo-card");
  todoDiv.dataset.idx = todoIdx;
  todoDiv.dataset.projectIdx = projectIdx;

  dateLabel.textContent = "Due date: ";
  dueDate.textContent = todo.getDueDate();
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dueDate);

  titleDiv.classList.add("space-between");
  titlePara.textContent = todo.getTitle();
  titlePara.classList.add("todo-title");
  expandBtn.textContent = "Expand";
  expandBtn.classList.add("expand-btn");
  titleDiv.appendChild(titlePara);
  titleDiv.appendChild(expandBtn);

  todoDiv.appendChild(dateDiv);
  todoDiv.appendChild(titleDiv);
  return {todoDiv, expandBtn};
}