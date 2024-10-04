import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import "./App.css";

export class App extends Component {
  static propTypes = {};

  state = {
    todos: [
      {
        id: uuid4(),
        title: "Todos 1",
        completed: false,
      },
      {
        id: uuid4(),
        title: "Todos 2",
        completed: false,
      },
      {
        id: uuid4(),
        title: "Todos 3",
        completed: false,
      },
    ],
  };

  //markComplete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: uuid4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <>
        <Header />
        <AddTodo AddTodo={this.AddTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </>
    );
  }
}

export default App;
