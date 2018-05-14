import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { toast } from "react-toastify";
import Auth from "Auth";
import Api from "Api";
import EditProfile from "EditProfile";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        firstName: "",
        lastName: "",
        phone: "",
        age: 0,
        description: ""
      }
    };
  }

  componentDidMount() {
    Api.profileShow(Auth.getUserTokens())
      .then(profile => {
        this.setState({ profile });
      })
      .catch(error => {
        toast.error(error);
      });
  }

  handleSubmit = () => {
    toast.info("Вы успешно изменили профиль");
  };

  render() {
    return (
      <Container>
        <Row>
          <EditProfile
            profile={this.state.profile}
            handleSubmit={this.handleSubmit}
          />
        </Row>
      </Container>
    );
  }
}
