import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ componentName, linkText, href }) {
  return (
    <li className={`nav-item ${componentName}`}>
      <Link className="nav-link" to={href}>
        {linkText}
      </Link>
    </li>
  );
}
