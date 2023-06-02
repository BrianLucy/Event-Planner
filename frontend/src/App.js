// import logo from './logo.svg';

import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingPage from './pages/Booking';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MaiNavigation';

import './App.css';


class App extends Component{

// function App() {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <MainNavigation/>
        <main className="main-content">
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" Component={AuthPage}/>
        <Route path="/events" Component={EventsPage}/>
        <Route path="/bookings" Component={BookingPage}/>
        </Switch>
        </main>
        </React.Fragment>
        </BrowserRouter>
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
