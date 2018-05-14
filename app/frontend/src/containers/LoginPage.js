import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import LoginForm from "LoginForm";

class LoginPage extends Component {
  handleSubmit = () => {
    toast.info("Вы успешно вошли в систему");
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <LoginForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(LoginPage);
