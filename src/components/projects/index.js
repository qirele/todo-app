import './style.css';

export default function createProjects(projects) {
  const main = document.createElement("main");
  main.classList.add("grid");

  projects.forEach((project, projectIdx) => {
    const div = document.createElement("div");
    div.dataset.projectIdx = projectIdx;
    const h1 = document.createElement("h1");
    h1.textContent = project.getTitle();
    h1.dataset.projectIdx = projectIdx;
    div.appendChild(h1);

    project.getTodos().forEach((todo, todoIdx) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo-card");
      const p = document.createElement("p");
      const detailsBtn = document.createElement("button");
      detailsBtn.textContent = "See details";
      detailsBtn.classList.add("details-btn");
      todoDiv.dataset.idx = todoIdx;
      todoDiv.dataset.projectIdx = projectIdx;
      p.textContent = todo.getTitle();
      todoDiv.appendChild(p);
      todoDiv.appendChild(detailsBtn);
      div.appendChild(todoDiv);
    });

    main.appendChild(div);

  });

  return main;
}