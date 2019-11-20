import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui pointing menu">
      <NavLink to="/questions" className="item">
        Questions
      </NavLink>
      {currentUser ? (
        <>
          <span>{currentUser.full_name}</span>
          <NavLink exact to="/questions/new">
            Ask a Question
          </NavLink>
          <NavLink to="/questions" onClick={onSignOut}>
            Sign Out
          </NavLink>
        </>
      ) : (
        <React.Fragment>
          <NavLink exact to="/sign_in">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up">
            Sign Up
          </NavLink>
        </React.Fragment>
      )}
      <div className="right menu">
        <CurrentDateTime />
      </div>
    </div>
  );
}

export default NavBar;
