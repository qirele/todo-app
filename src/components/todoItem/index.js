export default function (title, description, dueDate, importanceIdx) { /*, dueDate, importance, isCompleted */
  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;
  const getDescription = () => description;
  const setDescription = (newDesc) => description = newDesc;
  const getDueDate = () => dueDate;
  const setDueDate = (newDate) => dueDate = newDate;
  const importance = ["high", "medium", "low"];
  const getImportance = () => importance[importanceIdx];


  return { setTitle, getTitle, setDescription, getDescription, setDueDate, getDueDate, getImportance }
}

// const getDate = () => dueDate;
// const getIsCompleted = () => isCompleted;