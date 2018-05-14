import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import { Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import Api from "Api";
import Auth from "Auth";
import User from "User";

class Logout extends Component {
  componentWillMount() {
    Api.logoutUser(Auth.getUserTokens())
      .catch(({ response }) => {
        toast.error(response.data);
      })
      .then(() => {
        Auth.removeUserTokens();
        User.removeUserInfo();
        toast.info("Вы успешно вышли из системы");
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <MDSpinner size={70} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Logout);
