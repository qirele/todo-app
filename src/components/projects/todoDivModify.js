export default function (todoTitle, description) {
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const titleInput = document.createElement("input");
  const titleInputLabel = document.createElement("label");
  const div3 = document.createElement("div");
  const descTextarea = document.createElement("textarea");
  const descTextareaLabel = document.createElement("label");
  const div4 = document.createElement("div");
  const collapseBtn = document.createElement("button");

  titleInput.value = todoTitle;
  titleInputLabel.textContent = "new title:";
  div2.appendChild(titleInputLabel);
  div2.appendChild(titleInput);

  descTextarea.value = description;
  descTextareaLabel.textContent = "new description:";
  div3.appendChild(descTextareaLabel);
  div3.appendChild(descTextarea);

  collapseBtn.textContent = "save/collapse";
  div4.appendChild(collapseBtn);


  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);

  return { div, collapseBtn, titleInput, descTextarea };
}