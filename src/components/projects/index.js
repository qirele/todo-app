const body = document.querySelector("body");

function createDivProject(projects, main) {
  projects.forEach((project, projectIdx) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = project.getTitle();
    h1.dataset.projectIdx = projectIdx;
    div.appendChild(h1);

    project.getTodos().forEach((todo, idx) => {
      const p = document.createElement("p");
      p.textContent = todo.getTitle();
      p.dataset.idx = idx;
      p.dataset.projectIdx = projectIdx;
      div.appendChild(p);
    });
    main.appendChild(div);
  });
}

export default function (projects) {
  let main = body.querySelector("main");
  if (main === null) {
    main = document.createElement("main");
    createDivProject(projects, main);
    body.appendChild(main);
  } else {
    main.textContent = "";
    createDivProject(projects, main);
  }
}