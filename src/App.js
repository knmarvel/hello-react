import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
render() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, <Text color="teal">Karen!</Text> Hello, <Text color="magenta">grader!</Text></h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
class Text extends Component{
  render(){
  return(
  <span style={{color: this.props.color}}> {this.props.children}
  </span>)
}
}
export default App;
