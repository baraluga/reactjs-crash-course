import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: '',
    vagina: 'hello',
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo item..."
          style={{ flex: '10' }}
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
  onTitleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
}

export default AddTodo;
