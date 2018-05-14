import React from "react";
import { Link } from "react-router-dom";
import "UserInfo.css";

export default function UserInfo({ user, ...props }) {
  return (
    <div className="UserInfo">
      <div className="UserInfo-avatar">
        <img src={user.thumbnail} alt="icon" />
      </div>
      <div className="UserInfo-info">
        <Link to="/">{`${user.firstName} ${user.lastName}`}</Link>
        <small>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </small>
      </div>
    </div>
  );
}
