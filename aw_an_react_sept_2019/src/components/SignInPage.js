import React, { Component } from "react";

class SignInPage extends Component {
  render() {
    return (
      <main>
        <div className="ui header">Sign In</div>
        <form className="ui form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.ext"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
            />
          </div>
          <button className="ui button" type="submit"></button>
        </form>
      </main>
    );
  }
}

export default SignInPage;
