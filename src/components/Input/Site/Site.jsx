import { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

import checkSite from "../../../utils/CheckSite";

import "./../Input.css";

const Site = forwardRef(
  ({ dispatch, appDispatch, id, label, placeholder }, forwardedRef) => {
    const [isWarned, setIsWarned] = useState(false);
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
        const warningRefCurrent = warningRef.current;
        if (warningRefCurrent) {
          warningRefCurrent.textContent = "Начинается с https://";
        }
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
  }
);

Site.displayName = "Site";

Site.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default Site;
