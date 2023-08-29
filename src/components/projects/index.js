const body = document.querySelector("body");

function createDivProject(projects, main) {
  projects.forEach((project, projectIdx) => {
    const div = document.createElement("div");
    div.addEventListener("click", handleDivClick);
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

  function handleDivClick(e) {
    const todoPara = e.target;
    let todoIdx = e.target.dataset.idx;
    let projectIdx = e.target.dataset.projectIdx;
    if (todoIdx) { // clicked on a todo item
      todoPara.textContent = "";
      const input = document.createElement("input");
      const btn = document.createElement("button");
      btn.textContent = "Change";
      btn.addEventListener("click", () => handleTodoClick(input));
      todoPara.appendChild(input);
      todoPara.appendChild(btn);
    } else if (projectIdx) { // clicked on a h1, ie. project title

    }

    function handleTodoClick(input) {
      const theTodoItem = projects[projectIdx].getTodos()[todoIdx];
      theTodoItem.setTitle(input.value === "" ? theTodoItem.getTitle() : input.value);
      todoPara.textContent = theTodoItem.getTitle();
    }

  }

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