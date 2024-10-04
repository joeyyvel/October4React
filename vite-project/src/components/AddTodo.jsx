import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    title: " ",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: " " });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "10px" }}
        />

        <input type="submit" value="submit" className="Btn" />
      </form>
    );
  }
}
