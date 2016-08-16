import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProp = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProp = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProp, mapDispatchToProp)(TodoList);
export default VisibleTodoList;
