import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <Route  path='/login' component={Login} />
          <Route  path='/register' component={Register} />

        </header>
      </div>
    );
  }
}
export default App;
