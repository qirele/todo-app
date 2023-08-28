export default function (title) {
  const todos = [];
  const getTitle = () => title;
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos.push(todo);
  }

  return { getTitle, getTodos, addTodo };
}
// const printTodos = () => {
//   console.log(`Project: ${title}`);
//   todos.forEach(el => {
//     console.log(`${el.getTitle()}, ${el.getDescription()}`);
//   })
// }