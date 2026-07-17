import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, onToggle, onDelete }) => {
  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);

  if (sortedTasks.length === 0) {
    return <p className="empty-list">No tasks yet. Create one!</p>;
  }

  return (
    <ul className="list">
      {sortedTasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          done={task.done}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TasksList;
