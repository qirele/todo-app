export default function () {

  const div = document.createElement("div");
  const input = document.createElement("input");
  const addTodoBtn = document.createElement("button");
  const addProjectBtn = document.createElement("button");
  addTodoBtn.textContent = "Add Todo Item";
  addProjectBtn.textContent = "Add Project";
  div.appendChild(input);
  div.appendChild(addTodoBtn);
  div.appendChild(addProjectBtn);
 
  return {div, addTodoBtn, addProjectBtn, input};
}