import { useRef, useState, forwardRef } from "react";
import { startsWithCapital } from "../../../utils/CheckName";

import PropTypes from "prop-types";
import "./../Input.css";

import actionTypes from "../../../utils/ActionTypes";

import appActionTypes from "../../../utils/AppActionTypes";

const Name = forwardRef(
  ({ dispatch, appDispatch, id, label, placeholder }, ref) => {
    const [isWarned, setIsWarned] = useState(false);
    const warningRef = useRef();

    const inputChangeHandler = (event) => {
      const isCap = startsWithCapital(event.target.value);

      // reset if empty
      if (isCap === "empty") {
        setIsWarned(false);

        if (event.target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_FALSE });
        } else if (event.target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_FALSE });
        }

        event.target.style.outline = "none";
        return;
      }

      // toggle warning on change
      if (!isCap) {
        setIsWarned(true);
        if (event.target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_FALSE });
        } else if (event.target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_FALSE });
        }

        const warningRefCurrent = warningRef?.current ?? { textContent: "" };
        warningRefCurrent.textContent = "Напишите с заглавной буквы";
        event.target.style.outline = "var(--input-warning-outline)";
      } else {
        setIsWarned(false);
        if (event.target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_TRUE });
          appDispatch({ type: appActionTypes.NAME_ALTER }, event.target.value);
        } else if (event.target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_TRUE });
          appDispatch(
            { type: appActionTypes.SURNAME_ALTER },
            event.target.value
          );
        }

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
          type="text"
          className="input-input"
          id={`${id}-input`}
          ref={ref}
        />
        {isWarned && (
          <p ref={warningRef} className="input-warning">
            Напишите с заглавной буквы
          </p>
        )}
      </div>
    );
  }
);

Name.propTypes = {
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

Name.displayName = "Name";

export default Name;
