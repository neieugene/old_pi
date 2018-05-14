import React from "react";
import { Container, Row, Col } from "reactstrap";
import Menu from "Menu";
import Header from "Header";
import Committees from "Committees";

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row>
        <Col>
          <Header reverse hideLogo locale="en">
            <Committees />
          </Header>
        </Col>
      </Row>
    </Container>
  );
}
