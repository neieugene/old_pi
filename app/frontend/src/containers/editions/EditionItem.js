import React, { Component } from "react";
import showMultipleToastMessages from "showMultipleToastMessages";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import Api from "Api";
import Auth from "Auth";
import ListItem from "ListItem";
import EditionSubscriptionRequestForm from "../editions/EditionSubscriptionRequestForm";
import UserInfo from "UserInfo";
import MDSpinner from "react-md-spinner";

export default class EditionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edition: {
        articles: []
      },
      showModal: false,
      spinner: true
    };
  }

  toggle() {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  }

  componentDidMount() {
    Api.getEdition(this.props.match.params.editionId, Auth.getUserTokens())
      .then(data => {
        this.setState({ edition: data, spinner: false });
      })
      .catch(({ response }) => {
        showMultipleToastMessages(response.data.errors, "error");
        this.props.history.goBack();
      });
  }

  render() {
    return (
      <Container>
        <Modal isOpen={this.state.showModal} toggle={this.toggle.bind(this)}>
          <ModalHeader toggle={this.toggle.bind(this)}>
            Подписаться на номер
          </ModalHeader>
          <ModalBody>
            <EditionSubscriptionRequestForm
              editionId={this.state.edition.id}
              handleSubmit={this.toggle.bind(this)}
            />
          </ModalBody>
        </Modal>
        {this.state.spinner ? (
          <Row>
            <Col md={{ size: 2, offset: 5 }}>
              <MDSpinner size={70} />
            </Col>
          </Row>
        ) : (
          <div>
            <Row>
              <Col xs={12} md={9}>
                <h2>{this.state.edition.name}</h2>
                <p>{this.state.edition.description}</p>
              </Col>
              <Col xs={6} md={3}>
                {!this.state.edition.userSubscribed && (
                  <Button onClick={this.toggle.bind(this)} color="success">
                    Подписаться
                  </Button>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={9}>
                {this.state.edition.articles.map((item, index) => {
                  return (
                    <div key={index}>
                      <ListItem
                        itemHref={`${this.props.match.url}/articles/${item.id}`}
                        key={item.id}
                        itemId={item.id}
                        title={item.name}
                        description={item.description}
                        picture={item.smallAvatar}
                        isDisabled={item.isDisabled}
                        popoverContent={
                          <div>
                            {item.annotation}
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
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
        )}
      </Container>
    );
  }
}
