import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div>
        <button className="btn btn-sm btn-warning me-2" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;