import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, onToggle, onDelete }) => {
  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);

  return (
    <li className={`list-item ${done ? 'list-item_done' : ''}`}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={handleToggle}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={handleDelete}
        aria-label="Delete task"
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
