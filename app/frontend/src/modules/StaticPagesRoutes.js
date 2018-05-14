import React from "react";
import { withRouter } from "react-router-dom";
import ContentPage from "ContentPage";
import Menu from "Menu";
import staticPages from "StaticPages";

function generateStaticPagesRoutes(staticPages) {
  return staticPages.map(page => ({
    path: page.href,
    component: withRouter(({ location }) => (
      <ContentPage
        pageTitle={page.pageTitle}
        aside={<Menu showMain aside currentRoute={location.pathname} />}
      >
        {page.content}
      </ContentPage>
    ))
  }));
}

const staticPagesRoutes = generateStaticPagesRoutes(staticPages);

export default staticPagesRoutes;
