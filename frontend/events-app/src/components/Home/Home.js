import React, { Component } from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home">
          <Posts />
        </div>
      </>
    );
  }
}

export default HomePage;
