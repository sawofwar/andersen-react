import React, { createRef } from "react";
import PropTypes from "prop-types";

import "./TextArea.css";

const MAX_LENGTH = 600;

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.spanRef = createRef();
    this.textAreaRef = createRef();

    this.state = {
      isWarned: false,
    };
  }

  clearText() {
    this.textAreaRef.current.textContent = "";
  }

  textAreaChangeHandler(event) {
    const input = event.target.value;
    const lengthIndicator = this.spanRef.current;

    lengthIndicator.textContent = input.length;

    if (input.length > MAX_LENGTH) {
      this.setState({ isWarned: true });
      event.target.style.outline = "var(--input-warning-outline)";
    } else {
      this.setState({ isWarned: false });
      event.target.style.outline = "none";
    }
  }

  render() {
    return (
      <div className="textarea-block">
        <label className="textarea-label" htmlFor={`${this.props.id}-textarea`}>
          {this.props.label}
        </label>
        <textarea
          ref={this.textAreaRef}
          onChange={this.textAreaChangeHandler.bind(this)}
          placeholder={this.props.placeholder}
          className="textarea-textarea"
          id={`${this.props.id}-textarea`}
        />
        <div className="length-and-warning">
          {this.state.isWarned && (
            <p className="textarea__input-warning">Не более 600 символов</p>
          )}

          <p className="length-indicator">
            <span ref={this.spanRef}>0</span>
            /600
          </p>
        </div>
      </div>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  passedState: PropTypes.object,
};

export default TextArea;
