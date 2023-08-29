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
      const p = document.createElement("p");
      p.textContent = todo.getTitle();
      p.dataset.idx = todoIdx;
      p.dataset.projectIdx = projectIdx;
      div.appendChild(p);
    });

    main.appendChild(div);

  });

  return main;
}