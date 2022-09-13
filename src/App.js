// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import DisplayTasks from './Overview';

class App extends Component{

  constructor() {
    super();
    this.state = {
      task: [],
      userInput: '',
    };
    this.UserType = this.UserType.bind(this);
    this.RecordTask = this.RecordTask.bind(this);
    
  }

  UserType(event) {
    this.setState({userInput: event.target.value});
    console.log(this.state.userInput)
  }

  RecordTask(event) {
    console.log(this.state.task);
    this.setState({task: [...this.state.task, `${this.state.userInput}`]});
    this.setState({userInput: ''});
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <DisplayTasks tasks={this.state.task}/>
        <form onSubmit={this.RecordTask}>
          {/* <label htmlFor="input"></label> */}
          <input type="text" value={this.state.userInput} id="input" onChange={this.UserType} autoFocus/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}




export default App;
