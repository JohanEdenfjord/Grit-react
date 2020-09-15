import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markComplete={this.props.markComplete}
              delTodo={this.props.delTodo}
            />
          );
        })}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
