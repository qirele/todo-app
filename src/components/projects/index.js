import './style.css';

export default function createProjects(projects) {
  const main = document.createElement("main");
  main.classList.add("grid");

  projects.forEach((project, projectIdx) => {
    const projectDiv = document.createElement("div");
    projectDiv.dataset.projectIdx = projectIdx;
    const h1 = document.createElement("h1");
    h1.textContent = project.getTitle();
    h1.dataset.projectIdx = projectIdx;
    projectDiv.appendChild(h1);

    project.getTodos().forEach((todo, todoIdx) => {
      const todoDiv = document.createElement("div");

      const dateDiv = document.createElement("div");
      const dateLabel = document.createElement("span");
      const dueDate = document.createElement("span");

      const titleDiv = document.createElement("div");
      const titlePara = document.createElement("p");
      const detailsBtn = document.createElement("button");

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
      detailsBtn.textContent = "Expand";
      detailsBtn.classList.add("expand-btn");
      titleDiv.appendChild(titlePara);
      titleDiv.appendChild(detailsBtn);

      todoDiv.appendChild(dateDiv);
      todoDiv.appendChild(titleDiv);

      projectDiv.appendChild(todoDiv);
    });

    main.appendChild(projectDiv);

  });

  return main;
}