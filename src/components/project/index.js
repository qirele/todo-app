export default function (title) {
  const todos = [];
  const getTitle = () => title;
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos.push(todo);
  }
  const deleteTodo = (idx) => {
    todos.splice(idx, 1)
  }

  return { getTitle, getTodos, addTodo, deleteTodo };
}
// const printTodos = () => {
//   console.log(`Project: ${title}`);
//   todos.forEach(el => {
//     console.log(`${el.getTitle()}, ${el.getDescription()}`);
//   })
// }