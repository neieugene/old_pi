import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import SignUpForm from "SignUpForm";

class SignUpPage extends Component {
  handleSubmit = () => {
    toast.info("Вы успешно зарегистрировались в системе");
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <SignUpForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(SignUpPage);
