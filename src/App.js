import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Header";
import Todos from "./todos";
import AddTodo from "./AddTodo";
import "./App.css";
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "hello world",
        completed: false,
      },
      {
        id: uuid(),
        title: "hello worlda",
        completed: false,
      },
      {
        id: uuid(),
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
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>          
        </div>
      </div>;
    </Router>
    )
  }
}

export default App;
