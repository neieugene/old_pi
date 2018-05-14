import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const loadScript = require("load-script");

const defaultScriptUrl = "https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js";

export default class Redactor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScriptLoaded: this.props.isScriptLoaded,
      config: this.props.config
    };

    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    if (!this.props.isScriptLoaded) {
      loadScript(this.props.scriptUrl, this.onLoad);
    } else {
      this.onLoad();
    }
  }

  onLoad() {
    this.setState({
      isScriptLoaded: true
    });

    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.state.config,
      this.props.content
    );

    for (const event in this.props.events) {
      const eventHandler = this.props.events[event];

      this.editorInstance.on(event, eventHandler);
    }
  }

  render() {
    return <div className={this.props.activeClass} />;
  }
}

Redactor.defaultProps = {
  content: "",
  config: {},
  isScriptLoaded: false,
  scriptUrl: defaultScriptUrl,
  activeClass: "",
  events: {}
};

Redactor.propTypes = {
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  events: PropTypes.object
};
