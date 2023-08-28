export default function (title, id) {
  const getID = () => id;
  const todos = [];
  const getTitle = () => title;
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos.push(todo);
  }

  const printTodos = () => {
    console.log(`Project: ${title}`);
    todos.forEach(el => {
      console.log(`${el.getTitle()}, ${el.getDescription()}`);
    })
  }

  return { getTitle, getTodos, addTodo, printTodos, getID};
}