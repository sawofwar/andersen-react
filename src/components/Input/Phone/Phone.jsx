import PropTypes from "prop-types";

import { checkPhone } from "../../../utils/CheckPhone";

import "./../Input.css";
import { useRef, useState } from "react";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

/* class Phone extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
      avoidHyphen: false,
    };

    this.warningRef = createRef();
  }

  inputChangeHandler(event) {
    const target = event.target;
    const targetValue = event.target.value;

    if (
      (targetValue.at(-1) === "-" && targetValue.length !== 2) ||
      (targetValue.at(-1) === "-" && targetValue.length !== 7) ||
      (targetValue.at(-1) === "-" && targetValue.length !== 10)
    ) {
      const targetValueArray = targetValue.split("");
      targetValueArray.pop();
      target.value = targetValueArray.join("");
    }

    if (
      event.target.value.length === 1 &&
      event.target.value !== "-" &&
      this.state.avoidHyphen === false
    ) {
      target.value = target.value + "-";
    } else if (
      event.target.value.length === 6 &&
      this.state.avoidHyphen === false
    ) {
      target.value = target.value + "-";
    } else if (
      event.target.value.length === 9 &&
      this.state.avoidHyphen === false
    ) {
      target.value = target.value + "-";
    }

    const isValid = checkPhone(event.target.value);

    if (isValid === "empty") {
      this.setState({ isWarned: false });
      event.target.style.outline = "none";

      this.props.dispatch({ type: actionTypes.PHONE_FALSE });
      return;
    }

    if (!isValid) {
      this.setState({ isWarned: true });
      this.props.dispatch({ type: actionTypes.PHONE_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
      const warningRefCurrent = this.warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Формат: 7-7777-77-77";
    } else {
      this.setState({ isWarned: false });
      this.props.dispatch({ type: actionTypes.PHONE_TRUE });
      this.props.appDispatch(
        { type: appActionTypes.PHONE_ALTER },
        event.target.value
      );

      event.target.style.outline = "none";
    }
  }

  keyDownHandler(event) {
    const target = event.target;

    if (event.code === "Backspace") {
      this.setState({ ...this.state, avoidHyphen: true });
      target.length = target.length - 1;

      setTimeout(() => {
        this.setState({ ...this.state, avoidHyphen: false });
      }, 10);
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
          maxLength={12}
          ref={this.props.forwardedRef}
          onKeyDown={this.keyDownHandler.bind(this)}
        />
        {this.state.isWarned && (
          <p className="input-warning" ref={this.warningRef}>
            Формат: 7-7777-77-77
          </p>
        )}
      </div>
    );
  }
} */

/* this.state = {
      isWarned: false,
      avoidHyphen: false,
    };

    this.warningRef = createRef(); */

const Phone = ({
  id,
  label,
  placeholder,
  forwardedRef,
  dispatch,
  appDispatch,
}) => {
  const [isWarned, setIsWarned] = useState();
  const [avoidHyphen, setAvoidHyphen] = useState();
  const warningRef = useRef();

  const inputChangeHandler = (event) => {
    const target = event.target;
    const targetValue = event.target.value;

    if (
      (targetValue.at(-1) === "-" && targetValue.length !== 2) ||
      (targetValue.at(-1) === "-" && targetValue.length !== 7) ||
      (targetValue.at(-1) === "-" && targetValue.length !== 10)
    ) {
      const targetValueArray = targetValue.split("");
      targetValueArray.pop();
      target.value = targetValueArray.join("");
    }

    if (
      event.target.value.length === 1 &&
      event.target.value !== "-" &&
      avoidHyphen === false
    ) {
      target.value = target.value + "-";
    } else if (event.target.value.length === 6 && avoidHyphen === false) {
      target.value = target.value + "-";
    } else if (event.target.value.length === 9 && avoidHyphen === false) {
      target.value = target.value + "-";
    }

    const isValid = checkPhone(event.target.value);

    if (isValid === "empty") {
      setIsWarned(false);
      event.target.style.outline = "none";

      dispatch({ type: actionTypes.PHONE_FALSE });
      return;
    }

    if (!isValid) {
      setIsWarned(true);
      dispatch({ type: actionTypes.PHONE_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
      const warningRefCurrent = warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Формат: 7-7777-77-77";
    } else {
      setIsWarned(false);
      dispatch({ type: actionTypes.PHONE_TRUE });
      appDispatch({ type: appActionTypes.PHONE_ALTER }, event.target.value);

      event.target.style.outline = "none";
    }
  };

  const keyDownHandler = (event) => {
    const target = event.target;

    if (event.code === "Backspace") {
      setAvoidHyphen(true);
      target.length = target.length - 1;

      setTimeout(() => {
        setAvoidHyphen(false);
      }, 10);
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
        maxLength={12}
        ref={forwardedRef}
        onKeyDown={keyDownHandler}
      />
      {isWarned && (
        <p className="input-warning" ref={warningRef}>
          Формат: 7-7777-77-77
        </p>
      )}
    </div>
  );
};

Phone.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default Phone;
