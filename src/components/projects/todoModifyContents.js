export default function (todo) {
  const titleDiv = document.createElement("div");
  const titleModifyInput= document.createElement("input");
  const titleInputLabel = document.createElement("label");

  const descDiv = document.createElement("div");
  const descModifyTextarea = document.createElement("textarea");
  const descTextareaLabel = document.createElement("label");

  const deleteTodoBtn = document.createElement("button");

  titleModifyInput.value = todo.getTitle();
  titleInputLabel.textContent = "new title:";
  titleModifyInput.classList.add("new-title-input");
  titleDiv.appendChild(titleInputLabel);
  titleDiv.appendChild(titleModifyInput);

  descModifyTextarea.value = todo.getDescription();
  descTextareaLabel.textContent = "new description:";
  descModifyTextarea.classList.add("new-description-textarea");
  descDiv.appendChild(descTextareaLabel);
  descDiv.appendChild(descModifyTextarea);

  deleteTodoBtn.textContent = "Delete item";

  return { titleDiv, descDiv, deleteTodoBtn, titleModifyInput, descModifyTextarea };

}