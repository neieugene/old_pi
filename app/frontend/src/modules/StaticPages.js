import React from "react";
import StaticPageContainer from "StaticPageContainer"

const staticPages = [
  {
    linkText: "О журнале",
    pageTitle: "О журнале",
    href: "/about",
    content: <StaticPageContainer slug="about" />
  },

  {
    linkText: "Ред. коллегия",
    pageTitle: "Редакционная коллегия",
    href: "/collegium",
    content: <StaticPageContainer slug="collegium" />
  },

  {
    linkText: "Ред. совет",
    pageTitle: "Редакционный совет",
    href: "/board",
    content: <StaticPageContainer slug="board" />
  },

  {
    linkText: "Авторам",
    pageTitle: "Авторам",
    href: "/for-authors",
    content: <StaticPageContainer slug="for-authors" />
  },

  {
    linkText: "События и новости",
    pageTitle: "События и новости",
    href: "/events",
    content: <StaticPageContainer slug="events" />
  },

  {
    linkText: "Редакционная политика",
    pageTitle: "Редакционная политика",
    href: "/policy",
    content: <StaticPageContainer slug="policy" />,
    hideOnMenu: true
  }
];

export default staticPages;
