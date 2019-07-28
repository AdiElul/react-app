import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Card from './Card';
import Toggle from './Toggel';
import AddTaskForm from './AddTaskForm';
import Name from './Name';
import Description from './Description';
import TimeCounter from './TimeCounter';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  
  render() {
    return (
        <div className="App">
          <Card/>
          <AddTaskForm />
          <TimeCounter/>
        </div>
    );
  }
}

export default App;