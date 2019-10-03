import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todos extends Component {
  render = () => {
    return (this.props.todos || []).map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delete={this.props.delete}
      />
    ));
  };
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
