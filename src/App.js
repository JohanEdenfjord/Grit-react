import React, { Component } from "react";
import Header from "./Header";
import Todos from "./todos";
import AddTodo from "./AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "hello world",
        completed: false,
      },
      {
        id: 2,
        title: "hello worlda",
        completed: false,
      },
      {
        id: 3,
        title: "hello worlds",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
  };

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  };
  addTodo = (title) => {
    console.log(title);
  }
  render() {
    return <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>;
  }
}

export default App;
