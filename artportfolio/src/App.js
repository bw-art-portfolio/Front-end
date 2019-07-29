import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

        </header>
      </div>
    );
  }
}
export default withRouter (App);
