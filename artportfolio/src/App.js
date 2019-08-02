import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Nav, NavItem, Container } from 'reactstrap';
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
      currentArtist: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://artportfoliobw.herokuapp.com/')
      .then(res => {
        // console.log(res.data.slice(0, 30));
        // Grabbing first 30 artists from array
        this.setState({ artists: res.data.slice(0, 30) })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    // console.log('app', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Nav className="nav-cont">
              <NavItem>
                <NavLink exact activeClassName='activeNavButton' to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact activeClassName='activeNavButton' to="/artist">Artist Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact activeClassName='activeNavButton' to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact activeClassName='activeNavButton' to="/register">Register</NavLink>
              </NavItem>
            </Nav>
          </Container>

          <section>
            <Route exact path='/'
              render={props => (
                <ArtistList
                  {...props}
                  artists={this.state.artists} />)} />

            <Route path='/artist'
              render={props => (
                <Artist {...props}
                  artists={this.state.artists} />)} />

            <Route path='/edit/:id' component={EditDescription} />

            < Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </section>

        </header>
      </div>
    );
  }
}
export default App;
