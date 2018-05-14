import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "routes";
import Header from "Header";
import Footer from "Footer";
import Main from "Main";
import SocialIcons from "SocialIcons";
import SearchForm from "SearchForm";
import UserLinks from "UserLinks";
import "App.css";

export default class App extends Component {
  render() {
    return (
      <div className="PIApp">
        <Header>
          <SocialIcons large className="d-flex justify-content-between" />
          <SearchForm />
          <UserLinks />
        </Header>

        <Main>
          {routes.map((route, i) => {
            return <Route exact {...route} key={i} />;
          })}
        </Main>

        <Footer />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
