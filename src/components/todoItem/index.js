export default function (title, description /*, dueDate, importance, isCompleted */) {
  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;
  const getDescription = () => description;
  const setDescription = (newDesc) => description = newDesc;

  // const getDate = () => dueDate;
  // const getImportance = () => importance;
  // const getIsCompleted = () => isCompleted;

  return { setTitle, getTitle, setDescription, getDescription }
}