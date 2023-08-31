export default function (title, description, dueDate) { /*, dueDate, importance, isCompleted */
  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;
  const getDescription = () => description;
  const setDescription = (newDesc) => description = newDesc;
  const getDueDate = () => dueDate;
  const setDueDate = (newDate) => dueDate = newDate;


  return { setTitle, getTitle, setDescription, getDescription, setDueDate, getDueDate}
}

// const getDate = () => dueDate;
// const getImportance = () => importance;
// const getIsCompleted = () => isCompleted;