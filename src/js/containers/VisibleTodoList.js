import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProp = (state) => {
  return { todos: state.todos };
};

const VisibleTodoList = connect(mapStateToProp)(TodoList);
export default VisibleTodoList;
