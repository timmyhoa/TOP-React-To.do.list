function DisplayTasks({ tasks }) {
  const TaskToDisplay = [...tasks].map((task, index) => (
    <li key={index}>{task}</li>
  ));
  return (
    <div>
      <ul>{TaskToDisplay}</ul>
    </div>
  );
}

export default DisplayTasks;
