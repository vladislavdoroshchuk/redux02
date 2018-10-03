import React from 'react';

const ToDoItem = ({ id, name, completed, onClick, is_deleted, deleteTodo }) => (
  <li className="list-group-item">
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={`checkbox-${id}`}
        onChange={onClick}
        checked={completed}
      />
      <label className="form-check-label" htmlFor={`checkbox-${id}`}>
        {is_deleted && <del>{name}</del>}
        {!is_deleted && name}
      </label>
      <button type="button" className="close" aria-label="Close" onClick={deleteTodo}>
        {is_deleted &&  <span aria-hidden="true">+</span>}
        {!is_deleted && <span aria-hidden="true">&times;</span>}
      </button>
    </div>
  </li>
);

export default ToDoItem;
