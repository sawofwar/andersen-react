import PropTypes from "prop-types";

import { checkPhone } from "../../../utils/CheckPhone";

import "./../Input.css";
import { useRef, useState, forwardRef } from "react";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

import hyphenatePhone from "../../../utils/HyphenatePhone";

const Phone = forwardRef(
  (
    {
      id,
      label,
      placeholder,

      dispatch,
      appDispatch,
    },
    forwardedRef
  ) => {
    const [isWarned, setIsWarned] = useState(false);
    const [avoidHyphen, setAvoidHyphen] = useState(false);
    const warningRef = useRef();

    const inputChangeHandler = ({ target }) => {
      hyphenatePhone(event, avoidHyphen);

      const isValid = checkPhone(target.value);

      if (isValid === "empty") {
        setIsWarned(false);
        target.style.outline = "none";

        dispatch({ type: actionTypes.PHONE_FALSE });
        return;
      }

      if (!isValid) {
        setIsWarned(true);
        dispatch({ type: actionTypes.PHONE_FALSE });

        target.style.outline = "var(--input-warning-outline)";
        const warningRefCurrent = warningRef?.current ?? { textContent: "" };
        warningRefCurrent.textContent = "Формат: 7-7777-77-77";
      } else {
        setIsWarned(false);
        dispatch({ type: actionTypes.PHONE_TRUE });
        appDispatch({ type: appActionTypes.PHONE_ALTER }, target.value);

        target.style.outline = "none";
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
  }
);

Phone.displayName = "Phone";

Phone.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default Phone;
