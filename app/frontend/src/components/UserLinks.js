import React from "react";
import { Link } from "react-router-dom";
import "UserLinks.css";
import Auth from 'Auth';
import User from 'User';

export default function UserLinks() {
  if (Auth.isUserLoggedIn()) {
    return (
      <div className="UserLinks">
        <Link to="/profile">{User.getUserInfo()['email']}</Link>
        <span className="separator">|</span>
        <Link to="/logout">Выйти</Link>
      </div>
    )
  } else {
    return (
      <div className="UserLinks">
        <Link to="/login">Войти</Link>
        <span className="separator">|</span>
        <Link to="/signup">Регистрация</Link>
      </div>
    );
  }
}
