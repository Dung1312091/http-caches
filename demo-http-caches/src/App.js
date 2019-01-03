import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  callAPI = () => {
    fetch("http://localhost:3001/test")
    .then(response => response.json())
    .then(data => console.log("data==>", data));
  }
  render() {
    return (
      <div className="App">
       <button onClick={this.callAPI}>
         request API
       </button>
      </div>
    );
  }
}

export default App;
