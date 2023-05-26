import { checkSite } from "../../../utils/CheckSite";

import PropTypes from "prop-types";

import "./../Input.css";
import { useState, useRef } from "react";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

/* class Site extends Input {
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
} */

/* this.state = {
      isWarned: false,
    };

    this.warningRef = createRef(); */

const Site = ({
  dispatch,
  appDispatch,
  id,
  label,
  placeholder,
  forwardedRef,
}) => {
  const [isWarned, setIsWarned] = useState();
  const warningRef = useRef();

  const inputChangeHandler = (event) => {
    const isValid = checkSite(event.target.value);

    if (isValid === "empty") {
      setIsWarned(false);
      dispatch({ type: actionTypes.SITE_FALSE });

      event.target.style.outline = "none";
      return;
    }

    if (!isValid) {
      setIsWarned(true);
      dispatch({ type: actionTypes.SITE_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
      const warningRefCurrent = warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Начинается с https://";
    } else {
      dispatch({ type: actionTypes.SITE_TRUE });
      appDispatch({ type: appActionTypes.SITE_ALTER }, event.target.value);

      setIsWarned(false);
      event.target.style.outline = "none";
    }
  };

  return (
    <div className="input-block">
      <label className="input-label" htmlFor={`${id}-input`}>
        {label}
      </label>

      <input
        onChange={inputChangeHandler}
        placeholder={placeholder}
        type="string"
        className="input-input"
        id={`${id}-input`}
        ref={forwardedRef}
      />
      {isWarned && (
        <p className="input-warning" ref={warningRef}>
          Начинается с https://
        </p>
      )}
    </div>
  );
};

Site.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default Site;
