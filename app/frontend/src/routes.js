import HomePage from "HomePage";
import LoginPage from "LoginPage";
import SignUpPage from "SignUpPage";
import ProfilePage from "ProfilePage";
import Logout from "Logout";
import RedactorPage from "RedactorPage";
import staticPagesRoutes from "StaticPagesRoutes";
import EditionsPage from 'editions/EditionsPage';
import EditionItem from 'editions/EditionItem';
import ArticlePage from 'articles/ArticlePage';

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },

  {
    path: "/login",
    component: LoginPage
  },

  {
    path: "/signup",
    component: SignUpPage
  },

  {
    path: "/profile",
    component: ProfilePage
  },

  {
    path: "/logout",
    component: Logout
  },

  {
    path: "/redactor",
    component: RedactorPage
  },

  {
    path: '/editions',
    component: EditionsPage
  },

  {
    path: '/editions/:editionId',
    component: EditionItem
  },

  {
    path: '/editions/:editionId/articles/:articleId',
    component: ArticlePage
  },

  ...staticPagesRoutes
];

export default routes;
