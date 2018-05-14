import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import { toast } from "react-toastify";
import ListItem from "ListItem";
import Api from "Api";
import Auth from "Auth";
import MDSpinner from "react-md-spinner";
import UserInfo from "UserInfo";

export default class EditionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEditions: [],
      allEditions: [],
      renderAllEditions: true,
      spinner: true
    };
  }

  componentDidMount() {
    const requests = [
      Api.getEditions(Auth.getUserTokens())
        .then(data => {
          this.setState({
            userEditions: data
          });
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data);
        }),

      Api.getEditions(Auth.getUserTokens(), true)
        .then(data => {
          this.setState({
            allEditions: data
          });
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data);
        })
    ];

    axios.all(requests).then(
      axios.spread(() => {
        this.setState({ spinner: false });
      })
    );
  }

  changeEditionStatus() {
    this.setState(prevState => {
      return { renderAllEditions: !prevState.renderAllEditions };
    });
  }

  render() {
    const editionsLabel = this.state.renderAllEditions
      ? "Все выпуски"
      : "Мои выпуски";
    const editionsLabelForButton = this.state.renderAllEditions
      ? "Мои выпуски"
      : "Все выпуски";
    const listItems = this.state.renderAllEditions
      ? this.state.allEditions
      : this.state.userEditions;

    return (
      <Container>
        {this.state.spinner ? (
          <Row>
            <Col md={{ size: 2, offset: 5 }}>
              <MDSpinner size={70} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={6}>
              <h3>{editionsLabel}</h3>
              {listItems.map((item, index) => {
                return (
                  <ListItem
                    itemHref={`${this.props.match.url}/${item.id}`}
                    key={item.id}
                    itemId={item.id}
                    title={item.name}
                    description={item.description}
                    annotation={item.annotation}
                    picture={item.smallAvatar}
                    isDisabled={item.isDisabled}
                    popoverContent={
                      <div>
                        {item.description}
                        {item.authors.map((author, author_index) => {
                          return (
                            <div key={author_index}>
                              <UserInfo key={author_index} user={author} />
                            </div>
                          );
                        })}
                      </div>
                    }
                  />
                );
              })}
            </Col>
            <Col>
              {Auth.isUserLoggedIn() && (
                <Button
                  color="success"
                  onClick={this.changeEditionStatus.bind(this)}
                >
                  {editionsLabelForButton}
                </Button>
              )}
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}
