import React, { Component } from "react";

class AuthPage extends Component {
  render() {
    return (
      <form className="authentication-form">
        <div className="control">
          <lable htmlFor="email">Email</lable>
          <input type="email" id="email" />
        </div>
        <div className="control">
          <lable htmlFor="password">password</lable>
          <input type="password" id="password" />
        </div>
        <div className="actions">
          <button type="button">Or signup</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default AuthPage;
