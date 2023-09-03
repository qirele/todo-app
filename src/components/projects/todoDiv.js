import createTodoContents from './todoContents';

export default function (todo, todoIdx, projectIdx) {

  const todoDiv = document.createElement("div");

  todoDiv.classList.add("todo-card");
  todoDiv.dataset.idx = todoIdx;
  todoDiv.dataset.projectIdx = projectIdx;

  const divLeft = document.createElement("div");
  divLeft.classList.add("todo-content-div");

  const { dateDiv, titleDiv } = createTodoContents(todo);

  divLeft.appendChild(dateDiv);
  divLeft.appendChild(titleDiv);

  const expandBtn = document.createElement("button");
  expandBtn.textContent = "Expand";
  expandBtn.classList.add("expand-btn");

  todoDiv.appendChild(divLeft);
  todoDiv.appendChild(expandBtn);
  return { todoDiv, expandBtn };
}