// import logo from './logo.svg';

import React, {Component} from 'react';
import {BrowserRoute, Route, Redirect, Switch} from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingPage from './pages/Booking';
import EventsgPage from './pages/Events';

import './App.css';


class App extends Component{

// function App() {
  render() {
    return (
      <BrowserRoute>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" Component={AuthPage}/>
        <Route path="/events" Component={EventsgPage}/>
        <Route path="/bookings" Component={BookingPage}/>
        </Switch>
        </BrowserRoute>
    );
  }
}

export default App;


//when did npm create-react-app .
 // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
