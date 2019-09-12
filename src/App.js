import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Take out the trash', completed: true },
      { id: 2, title: 'Dinner with Maj', completed: false },
      { id: 3, title: 'Meeting with Yannick', completed: false },
    ]
  }

  render = () => {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
