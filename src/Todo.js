import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted black",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todoProp;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "1px dotted black",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todo;
