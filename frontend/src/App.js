// import logo from './logo.svg';

import React, {Component} from 'react';
import {BrowserRoute, Route, Redirect, Switch} from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingPage from './pages/Booking';
import EventsgPage from './pages/Events';
import MainNavigation from './components/Navigation/Mainavigation';

import './App.css';


class App extends Component{

// function App() {
  render() {
    return (
      <BrowserRoute>
      <React.Fragment>
        <MainNavigation/>
        <main className="main-content">
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" Component={AuthPage}/>
        <Route path="/events" Component={EventsgPage}/>
        <Route path="/bookings" Component={BookingPage}/>
        </Switch>
        </main>
        </React.Fragment>
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
