import Input from "../Input";

import { checkSite } from "../../../utils/CheckSite";

import "./../Input.css";
import { createRef } from "react";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

class Site extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
    };

    this.warningRef = createRef();
  }

  inputChangeHandler(event) {
    const isValid = checkSite(event.target.value);

    if (isValid === "empty") {
      this.setState({ isWarned: false });
      this.props.dispatch({ type: actionTypes.SITE_FALSE });

      event.target.style.outline = "none";
      return;
    }

    if (!isValid) {
      this.setState({ isWarned: true });
      this.props.dispatch({ type: actionTypes.SITE_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
      const warningRefCurrent = this.warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Начинается с https://";
    } else {
      this.props.dispatch({ type: actionTypes.SITE_TRUE });
      this.props.appDispatch(
        { type: appActionTypes.SITE_ALTER },
        event.target.value
      );

      this.setState({ isWarned: false });
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
          type="string"
          className="input-input"
          id={`${this.props.id}-input`}
          ref={this.props.forwardedRef}
        />
        {this.state.isWarned && (
          <p className="input-warning" ref={this.warningRef}>
            Начинается с https://
          </p>
        )}
      </div>
    );
  }
}

export default Site;
