import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  const onClickHandler = () => {
    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button onClick={onClickHandler}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

const ConnectedAddTodo = connect()(AddTodo);
export default ConnectedAddTodo;
