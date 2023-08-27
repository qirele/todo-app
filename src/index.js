import './style.css';
import createTodo from './components/todoItem';
import createProject from './components/project';

const item1 = createTodo("Read book", "Ishamel by Daniel Quinn");
const item2 = createTodo("Read article", "Moloch by Slate Star Codex");
const item3 = createTodo("Watch TV", "The Office 7th season");
const proj1 = createProject("Consume content");
proj1.addTodo(item1);
proj1.addTodo(item2);
proj1.addTodo(item3);
proj1.printTodos();



// console.log(`${item1.getTitle()}, ${item1.getDescription()}`);
// console.log(`${item2.getTitle()}, ${item2.getDescription()}`);