export default function(title, description /*, dueDate, importance, isCompleted */ ) {
  const getTitle = () => title;
  const getDescription = () => description;
  // const getDate = () => dueDate;
  // const getImportance = () => importance;
  // const getIsCompleted = () => isCompleted;

  return {getTitle, getDescription}
}