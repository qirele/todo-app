export default function () {

  const newImportanceDiv = document.createElement("div");
  const newSelectLabel = document.createElement("label");
  const newImportanceSelect = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");

  newSelectLabel.textContent = "Todo's importance:";
  newSelectLabel.setAttribute("for", "newImportanceSelect");
  newImportanceSelect.setAttribute("id", "newImportanceSelect");
  option1.textContent = "High";
  option2.textContent = "Medium";
  option3.textContent = "Low";
  option1.value = "0";
  option2.value = "1";
  option3.value = "2";

  newImportanceSelect.appendChild(option1);
  newImportanceSelect.appendChild(option2);
  newImportanceSelect.appendChild(option3);


  newImportanceDiv.appendChild(newSelectLabel);
  newImportanceDiv.appendChild(newImportanceSelect);

  return { newImportanceDiv, newImportanceSelect };
}