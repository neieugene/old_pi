import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "ListItem.css";

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverIsOpen: false
    };
  }

  togglePopover(isOpen) {
    this.setState(prevState => {
      return { popoverIsOpen: !prevState.popoverIsOpen };
    });
  }

  render() {
    const {
      itemId,
      title,
      picture,
      description,
      itemHref,
      isDisabled,
      popoverContent
    } = this.props;

    return (
      <div id={`item-description-${itemId}`}>
        <div
          className={`d-flex ListItem ${
            isDisabled ? "ListItem--disabled" : ""
          }`}
          disabled={isDisabled}
        >
          {picture && (
            <img className="ListItem-picture" src={picture} alt="icon" />
          )}
          <div className="ListItem-text-content">
            <h3>
              <Link to={itemHref}>{title}</Link>
            </h3>
            <div
              className="ListItem-description"
              onMouseEnter={this.togglePopover.bind(this)}
              onMouseLeave={this.togglePopover.bind(this)}
            >
              {description}
            </div>
          </div>
        </div>
        <Popover
          placement="auto-start"
          isOpen={this.state.popoverIsOpen}
          target={`item-description-${itemId}`}
          toggle={this.togglePopover.bind(this)}
          className="ListItem-popover"
        >
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>{popoverContent}</PopoverBody>
        </Popover>
      </div>
    );
  }
}
