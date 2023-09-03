import './style.css';
import createTodoDiv from './todoDiv';

export default function (projects) {
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
      const {todoDiv} = createTodoDiv(todo, todoIdx, projectIdx);
      projectDiv.appendChild(todoDiv);
    });

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete project";
    deleteProjectBtn.classList.add("delete-project-btn");
    projectDiv.appendChild(deleteProjectBtn);

    main.appendChild(projectDiv);

  });

  return main;
}
