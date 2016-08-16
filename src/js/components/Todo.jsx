import React, { PropTypes } from 'react';

const Todo = ({ text, completed }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
