import React, { Component } from "react";
import AuthContext from "../context/auth-context";

import "./Auth.css";
class AuthPage extends Component {
  state = {
    isLogin: true,
  };
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }
  switchModeHandler = () => {
    this.setState((prevState) => {
      return { isLogin: !prevState.isLogin };
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    let requestBody = {
      query: `
         query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password,
      },
    };
    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation  CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password,
        },
      };
    }
    fetch("http://localhost:3005/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className="App">
          <div className="sign-tag">Sign in wih an existing account</div>
          <img className="img" src="https://res.cloudinary.com/closebrace/image/upload/w_400/v1491315007/usericon_id76rb.png" alt=""></img>
          <form className="auth-form" onSubmit={this.submitHandler}>
            <div className="form-control">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                ref={this.emailEl}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={this.passwordEl}
              />
            </div>
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="button" onClick={this.switchModeHandler}>
                Switch to {this.state.isLogin ? "Signup" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default AuthPage;
