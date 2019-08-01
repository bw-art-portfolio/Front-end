import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import ArtistList from './components/ArtistList';
import Artist from './components/Artist';
import EditDescription from './components/EditDescription';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://artportfoliobw.herokuapp.com/')
      .then(res => {
        console.log(res.data.slice(0,30));
        
        // Grabbing first 30 artists from array
        this.setState({ artists: res.data.slice(0,30) })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    console.log('app', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact activeClassName='active' to="/">Home</NavLink>
            <NavLink exact activeClassName='active' to="/login">Login</NavLink>
            <NavLink exact activeClassName='active' to="/register">Register</NavLink>
            <NavLink exact activeClassName='active' to="/artist">Artist Page</NavLink>

          </nav>
          <section>
            <Route exact path='/' render={props => (<ArtistList {...props} artists={this.state.artists} />) 
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {/* <Route path='/artist' component={Artist} /> */}
          </section>

          <section>
            <ArtistList artists={this.state.artists} />
            <Artist artists={this.state.artists} />
            <EditDescription />
          </section>

        </header>
      </div>
    );
  }
}
export default App;
