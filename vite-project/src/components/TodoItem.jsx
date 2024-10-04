import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  static propTypes = {};

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "2px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
          x
        </button>
      </div>
    );
  }
}

const btnStyle = {
  background: "crimson",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

TodoItem.propTypes = {
  todo: PropTypes.any,
};

export default TodoItem;
