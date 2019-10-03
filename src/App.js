import Axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { About, AddTodo, Header, Todos } from './components';
import { GET_TODOS_URL, UPDATE_TODO_URL } from './Constants';

class App extends Component {
  state = {
    todos: [],
  };

  toggleCompletion = id =>
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        completed: id === todo.id ? !todo.completed : todo.completed,
      })),
    });

  deleteItem = id =>
    Axios.delete(UPDATE_TODO_URL + id).then(res => console.log(res));

  addTodo = title =>
    Axios.post(UPDATE_TODO_URL, {
      title,
      completed: false,
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  render = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.toggleCompletion}
                    delete={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  };

  componentDidMount = () => {
    Axios.get(GET_TODOS_URL).then(res => this.setState({ todos: res.data }));
  };
}

export default App;
