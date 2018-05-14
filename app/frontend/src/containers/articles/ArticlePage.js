import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "Api";
import Auth from "Auth";
import UserInfo from "UserInfo";
import MDSpinner from "react-md-spinner";
import renderHTML from "react-render-html";
import "Article.css";

export default class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      spinner: true
    };
  }

  componentDidMount() {
    Api.getArticle(
      this.props.match.params.editionId,
      this.props.match.params.articleId,
      Auth.getUserTokens()
    )
      .then(article => {
        this.setState({ article });
      })
      .catch(({ response }) => {
        toast.error(response.data);
      })
      .then(() => {
        this.setState({ spinner: false });
      });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const article = this.state.article;
    const authors = this.state.article.authors;

    return (
      <Container className="Article px-3 px-sm-0">
        {this.state.spinner ? (
          <Row>
            <Col md={{ size: 2, offset: 5 }}>
              <MDSpinner size={70} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} className="mb-3 mb-sm-4">
              <Link to="#" onClick={this.goBack.bind(this)}>
                <i className="fa fa-angle-left mr-1" aria-hidden="true" />{" "}
                Вернуться к списку статей
              </Link>
            </Col>
            <Col xs={12} md={9} className="Article-container">
              <h2>{article.name}</h2>
              <p>
                <strong>{article.description}</strong>
              </p>
              <p className="Article-content">{renderHTML(article.content)}</p>
              {article.documentFileName && (
                <small>
                  Ссылка для скачивания:{" "}
                  <a
                    //TODO: remove hardcode
                    href={`http://localhost:3001/${article.document}`}
                    download={article.documentFileName}
                    className="Article-download-link"
                  >
                    {article.documentFileName}
                  </a>
                </small>
              )}
            </Col>
            <Col xs={12} md={3}>
              <div className="mt-2 mb-2">
                {article.authors.length > 1 ? "Авторы:" : "Автор:"}
              </div>
              {authors.map((author, index) => (
                <UserInfo user={author} key={index} />
              ))}
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}
