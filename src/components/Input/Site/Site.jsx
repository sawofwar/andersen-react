import { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

import checkSite from "../../../utils/CheckSite";

import InputWarning from "../../InputWarning/InputWarning";

import "./../Input.css";

const Site = forwardRef(
  ({ dispatch, appDispatch, id, label, placeholder }, forwardedRef) => {
    const [isValid, setisValid] = useState(false);
    const warningRef = useRef();

    const inputChangeHandler = ({ target }) => {
      const isSuccessfullyChecked = checkSite(target.value);

      if (isSuccessfullyChecked === "empty") {
        setisValid(false);
        dispatch({ type: actionTypes.SITE_FALSE });

        target.style.outline = "none";
        return;
      }

      if (!isSuccessfullyChecked) {
        setisValid(true);
        dispatch({ type: actionTypes.SITE_FALSE });

        target.style.outline = "var(--input-warning-outline)";
        if (warningRef.current) {
          setisValid(true);
        }
      } else {
        dispatch({ type: actionTypes.SITE_TRUE });
        appDispatch({ type: appActionTypes.SITE_ALTER }, target.value);

        setisValid(false);
        target.style.outline = "none";
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
        {isValid ? <InputWarning ref={warningRef} /> : null}
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
