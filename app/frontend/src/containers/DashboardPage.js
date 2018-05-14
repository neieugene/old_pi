import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import User from "User";

export default class DashboardPage extends Component {
  componentWillMount() {
    this.setState({
      user: User.getUserInfo()
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>Hello, {this.state.user.email}</Col>
        </Row>
      </Container>
    );
  }
}
