import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
        .then(res => {this.setState({ smurfs: res.data })})
        .catch(err => console.log(err))
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route path='/smurfs' component={SmurfForm} />
        <Route path='/smurfs' render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}

export default App;
