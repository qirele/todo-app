export default function (todo) {
  const titleDiv = document.createElement("div");
  const titleModifyInput= document.createElement("input");
  const titleInputLabel = document.createElement("label");

  const descDiv = document.createElement("div");
  const descModifyTextarea = document.createElement("textarea");
  const descTextareaLabel = document.createElement("label");

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


  return { titleDiv, descDiv, titleModifyInput, descModifyTextarea };

}