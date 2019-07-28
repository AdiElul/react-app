import React from 'react';

export default class AddTaskForm extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  addTask(e) {
    e.preventDefault();
  }  
  render() {
      return (
            <form onSubmit={this.addTask.bind(this)}>
                  <input type="text" ref={this.textInput} placeholder="Your task" />
                  <button type="submit">Add</button>
              </form>
      );
    }
  }

