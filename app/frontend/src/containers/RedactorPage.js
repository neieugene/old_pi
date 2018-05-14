import React, { Component } from "react";
import Redactor from "Redactor";

class RedactorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Default Content"
    };
  }

  onChange(e) {
    console.log(e.editor.getData());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-xs-12 mx-auto">
            <Redactor
              activeClass="editor"
              content={this.state.content}
              events={{
                change: this.onChange
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RedactorPage;
