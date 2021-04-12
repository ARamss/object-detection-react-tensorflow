import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoScene from './components/DemoScene';
class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoScene />
      </div>
    );
  }
}
export default App;
