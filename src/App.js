import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
//Person can be anything as above
class App extends Component {
//if we want to chnage something inside this we can do this
//class has properties and method
//sate but assign a value as objets
state = {
  persons: [
    {name: 'Max', age: 28 },
    {name: 'Max', age: 29 },
    {name: 'Max', age: 26 }

  ],
  otherState: 'some other vale'
}

switchNameHandler = () => {
 // console.log('was clicked')
// do not use this // this.state.persons[0].name = 'Maximilian'
//this is the method that update the state
this.setState({
  persons:  [
  {name: 'Maximallin', age: 28 },
  {name: 'Max', age: 29 },
  {name: 'Max', age: 100 }

]
})
}



  render() {
    // this render method will render something in the screen
    return (
      <div className="App">
      <h1>Hi I am react</h1>
      <p>This is reallly working</p>

      <button onClick={this.switchNameHandler}>Switch Name</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: sking</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
