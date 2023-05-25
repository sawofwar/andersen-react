import { createRef } from "react";
import { startsWithCapital } from "../../../utils/CheckName";

import Input from "../Input";

import "./../Input.css";

import actionTypes from "../../../utils/ActionTypes";

class Name extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
    };

    this.forwardedRef = props.forwardedRef;
    this.warningRef = createRef();
  }

  inputChangeHandler(event) {
    const isCap = startsWithCapital(event.target.value);

    // reset if empty
    if (isCap === "empty") {
      this.setState({ isWarned: false });

      if (event.target.id === "name-input") {
        this.props.dispatch({ type: actionTypes.NAME_FALSE });
      } else if (event.target.id === "surname-input") {
        this.props.dispatch({ type: actionTypes.SURNAME_FALSE });
      }

      event.target.style.outline = "none";
      return;
    }

    // toggle warning on change
    if (!isCap) {
      this.setState({ isWarned: true });
      if (event.target.id === "name-input") {
        this.props.dispatch({ type: actionTypes.NAME_FALSE });
      } else if (event.target.id === "surname-input") {
        this.props.dispatch({ type: actionTypes.SURNAME_FALSE });
      }

      const warningRefCurrent = this.warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Напишите с заглавной буквы";
      event.target.style.outline = "var(--input-warning-outline)";
    } else {
      this.setState({ isWarned: false });
      if (event.target.id === "name-input") {
        this.props.dispatch({ type: actionTypes.NAME_TRUE });
      } else if (event.target.id === "surname-input") {
        this.props.dispatch({ type: actionTypes.SURNAME_TRUE });
      }

      event.target.style.outline = "none";
    }
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor={`${this.props.id}-input`}>
          {this.props.label}
        </label>

        <input
          onChange={this.inputChangeHandler.bind(this)}
          placeholder={this.props.placeholder}
          type="text"
          className="input-input"
          id={`${this.props.id}-input`}
          ref={this.forwardedRef}
        />
        {this.state.isWarned && (
          <p ref={this.warningRef} className="input-warning">
            Напишите с заглавной буквы
          </p>
        )}
      </div>
    );
  }
}

export default Name;
