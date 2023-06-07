import React, {Component} from "react";
import "./Auth.css";

class AuthenticationPage extends Component {
    constructor(props) {
        super(props)
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    submitBtnHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;


        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        const requestBody = {
            queury:`
            mutation{
                createUser{userInput: {email: "${email}", password: "${password}"}} {
                    _id
                    email
                }
            }
            `
        };

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'aplication.json'
            }
        });
    };

    render() {
        return (
            <form className="authentication-form" on onSubmit={this.submitBtnHandler}>
                <div className="control">
                    <lable htmlFor="email">Email</lable>
                    <input type="email" id="email" ref={this.emailEl}/>
                </div>
                <div className="control">
                    <lable htmlFor="password">password</lable>
                    <input type="password" id="password" ref={this.passwordEl}/>
                </div>
                <div className="actions">
                    <button type="button">Or signup</button>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        );
    }
}

export default AuthenticationPage;