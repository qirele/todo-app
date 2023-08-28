const body = document.querySelector("body");

function createDivProject(projects, main) {
  projects.forEach(project => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = project.getTitle();
    div.appendChild(h1);

    project.getTodos().forEach(todo => {
      const p = document.createElement("p");
      p.textContent = todo.getTitle();
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