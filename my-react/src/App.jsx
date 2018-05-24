import React, { Component } from 'react';
import logo from './logo.svg';
import UserListContainer from './demo/UserListContainer'
import {MyComponentWithPersistentData} from './HOC/test2'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyComponentWithPersistentData />
      </div>
    )
  }
}

export default App;
