import React from "react";
import { Container, Row, Col } from "reactstrap";
import "ContentPage.css";

export default function ContentPage({ pageTitle, aside, children }) {
  return (
    <Container className="ContentPage">
      <Row>
        <Col lg={8} className="mr-auto">
          <h2>{pageTitle}</h2>
          <br />
          <div className="ContentPage-content">{children}</div>
        </Col>
        <Col lg={4}>
          {aside}
        </Col>
      </Row>
    </Container>
  );
}
