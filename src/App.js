import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Take out the trash', completed: false },
      { id: 2, title: 'Dinner with Maj', completed: false },
      { id: 3, title: 'Meeting with Yannick', completed: false },
    ]
  }

  toggleCompletion = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        completed: id === todo.id ? !todo.completed : todo.completed
      }))
    })
  }

  render = () => {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.toggleCompletion} />
      </div>
    )
  }
}

export default App;
