import React, { Component } from 'react';
import logo from './logo.svg';
// import PostList from './components/PostList'
// import FormWrapper from './shoukong/FormWrapper'
// import FormCheckbox from './shoukong/FormCheckbox'
import SimpleForm from './feishoukong/SimpleForm'

class App extends Component {
  handleClick(e) {
    console.log(e.target)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <PostList /> */}
        {/* <FormWrapper /> */}
        {/* <FormCheckbox /> */}
        <SimpleForm />
      </div>
    )
  }
}

export default App;
