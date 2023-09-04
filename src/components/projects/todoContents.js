export default function (todo) {
  const dateDiv = document.createElement("div");
  const dateLabel = document.createElement("span");
  const dueDate = document.createElement("span");

  const titleDiv = document.createElement("div");
  const titlePara = document.createElement("p");


  dateLabel.textContent = "Due date: ";
  dueDate.textContent = todo.getDueDate();
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dueDate);


  titlePara.textContent = todo.getTitle();
  titlePara.classList.add("todo-title");
  titleDiv.appendChild(titlePara);

  return { dateDiv, titleDiv };

}