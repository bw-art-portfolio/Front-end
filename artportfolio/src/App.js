import axios from 'axios';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import ArtistList from './components/ArtistList';
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      artsist: []
    };
  }

    componentDidMount() {
      axios
          .get('https://artportfoliobw.herokuapp.com/')
          .then(res => {
            
              this.setState({ artists: res.data })
          })
          .catch(err => {
              console.log(err)
          })
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <Route exact path='/' component={ArtistList} />
          <Route  path='/login' component={Login} />
          <Route  path='/register' component={Register} />
         
        </header>
      </div>
    );
  }
}
export default App;
