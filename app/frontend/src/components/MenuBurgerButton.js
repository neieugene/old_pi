import React from "react";

export default function MenuBurgerButton() {
  return (
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      Меню
      <i className="fa fa-bars" />
    </button>
  );
}
