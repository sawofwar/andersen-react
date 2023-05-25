import React, { createRef } from "react";
import PropTypes from "prop-types";

import "./TextArea.css";

import actionTypes from "../../utils/ActionTypes";

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

      if (event.target.id === "bio-textarea") {
        this.props.dispatch({ type: actionTypes.DESCRIPTION_FALSE });
      } else if (event.target.id === "tech-stack-textarea") {
        this.props.dispatch({ type: actionTypes.STACK_FALSE });
      } else if (event.target.id === "last-project-textarea") {
        this.props.dispatch({ type: actionTypes.PROJECT_FALSE });
      }

      this.props.dispatch({ type: actionTypes.DESCRIPTION_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
    } else if (input.length === 0) {
      if (event.target.id === "bio-textarea") {
        this.props.dispatch({ type: actionTypes.DESCRIPTION_FALSE });
      } else if (event.target.id === "tech-stack-textarea") {
        this.props.dispatch({ type: actionTypes.STACK_FALSE });
      } else if (event.target.id === "last-project-textarea") {
        this.props.dispatch({ type: actionTypes.PROJECT_FALSE });
      }
    } else {
      this.setState({ isWarned: false });
      if (event.target.id === "bio-textarea") {
        this.props.dispatch({ type: actionTypes.DESCRIPTION_TRUE });
      } else if (event.target.id === "tech-stack-textarea") {
        this.props.dispatch({ type: actionTypes.STACK_TRUE });
      } else if (event.target.id === "last-project-textarea") {
        this.props.dispatch({ type: actionTypes.PROJECT_TRUE });
      }
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
  dispatch: PropTypes.func,
};

export default TextArea;
