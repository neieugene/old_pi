import React from "react";
import { Container, Row, Col } from "reactstrap";
import "Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <hr />
      <Container>
        <Row>
          <Col lg={8} md={10} className="mx-auto">
            <p className="copyright">
              &copy; 2017, Следственный комитет Республики Беларусь. Все права
              защищены
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
