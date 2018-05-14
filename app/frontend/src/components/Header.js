import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ru from "../locales/ru.json";
import en from "../locales/en.json";
import skrb from "skrb.png";
import "Header.css";

const locales = { ru, en };

export default function Header({ hideLogo, locale = "ru", reverse, children }) {
  const { Header } = locales[locale];

  return (
    <header className={`Header masthead ${reverse ? "Header--reverse" : ""}`}>
      <div className="line-bg">
        <div className="ornament-bg">
          <Container>
            <Row
              className={`py-3 align-items-center ${reverse
                ? "flex-row-reverse text-right"
                : ""}`}
            >
              <Col lg={7}>
                {!hideLogo && (
                  <Link to="/">
                    <img
                      className="site-logo"
                      src={skrb}
                      alt="Следственный комитет Республики Беларусь"
                      title="Следственный комитет Республики Беларусь"
                    />
                  </Link>
                )}
                <div className="site-heading">
                  <h1>
                    <Link to="/">
                      {Header.title}
                      <br />
                      <span className="text-wide">{Header.titleSecond}</span>
                    </Link>
                  </h1>
                  <span className="subheading text-center text-uppercase">
                    {Header.desc}
                    <br />
                    {Header.descSecond}
                  </span>
                </div>
              </Col>

              <Col lg={4}
                className={`mt-1 ${reverse ? "mr-auto" : "ml-auto"}`}
              >
                {children}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}
