
export default function (title) {
  const todos = [];
  const getTitle = () => title;
  const addTodo = (todo) => {
    todos.push(todo);
  }

  const printTodos = () => {
    console.log(`Project: ${title}`);
    todos.forEach(el => {
      console.log(`${el.getTitle()}, ${el.getDescription()}`);
    })
  }

  return { getTitle, addTodo, printTodos };
}