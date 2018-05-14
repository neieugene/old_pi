import React, { Component } from "react";
import Api from "Api";
import noskevich from "noskevic.jpg";

export default class StaticPageContainer extends Component {
  constructor(props) {
    super(props);

    this.slug = props.slug
    this.state = { body: "" }
  }

  componentDidMount() {
    Api.getStaticPage(this.slug)
      .then(data => {
        this.setState({ body: data.body })
      })
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.body}} />
    )
  }
}
