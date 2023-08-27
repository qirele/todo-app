import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';

const projects = [];

(function () {
  const item1 = createTodo("Read book", "Ishmael by Daniel Quinn");
  const item2 = createTodo("Read article", "Moloch by Slate Star Codex");
  const item3 = createTodo("Watch TV", "The Office 7th season");
  const proj1 = createProject("Consume content");
  proj1.addTodo(item1);
  proj1.addTodo(item2);
  proj1.addTodo(item3);
  projects.push(proj1);
})();

(function () {
  const item1 = createTodo("Build a business", "Money money");
  const proj1 = createProject("Consume content");
  proj1.addTodo(item1);
  projects.push(proj1);
})();

projects.forEach(proj => {
  proj.printTodos();
  console.log("\n");
});

projects[1].addTodo(createTodo("Tomfoolery", "Do absolute mischief"));

projects.forEach(proj => {
  proj.printTodos();
  console.log("\n");
});

projects[1].getTodos()[1].setTitle("Learning programming");

projects.forEach(proj => {
  proj.printTodos();
  console.log("\n");
});