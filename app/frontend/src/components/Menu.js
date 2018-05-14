import React from "react";
import MenuItem from "MenuItem";
import MenuBurgerButton from "MenuBurgerButton";
import staticPages from "StaticPages";
import "Menu.css";

export default function Menu({ showMain, aside, currentRoute }) {
  return (
    <nav
      className={`Menu navbar navbar-expand-lg navbar-light ${aside
        ? "Menu--aside"
        : ""}`}
    >
      <MenuBurgerButton />

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          {showMain && <MenuItem linkText="Главная" href="/" />}
          {staticPages.map(
            (page, i) =>
              currentRoute !== page.href &&
              !page.hideOnMenu && <MenuItem {...page} key={i} />
          )}
          <MenuItem linkText="В номере" href="/editions" />
        </ul>
      </div>
    </nav>
  );
}
