import React, { Component } from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Footer from "../Footer/Footer"

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
      
          <Posts />
        
        <Footer />
      </>
    );
  }
}

export default HomePage;
