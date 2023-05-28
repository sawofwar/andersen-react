import { useRef, useState, forwardRef } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../../utils/ActionTypes";
import appActionTypes from "../../../utils/AppActionTypes";

import startsWithCapital from "../../../utils/CheckName";

import "./../Input.css";

const Name = forwardRef(
  ({ dispatch, appDispatch, id, label, placeholder }, ref) => {
    const [isWarned, setIsWarned] = useState(false);
    const warningRef = useRef();

    const inputChangeHandler = ({ target }) => {
      const isCap = startsWithCapital(target.value);

      // reset if empty
      if (isCap === "empty") {
        setIsWarned(false);

        if (target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_FALSE });
        } else if (target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_FALSE });
        }

        target.style.outline = "none";
        return;
      }

      // toggle warning on change
      if (!isCap) {
        setIsWarned(true);
        if (target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_FALSE });
        } else if (target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_FALSE });
        }

        const warningRefCurrent = warningRef?.current ?? { textContent: "" };
        warningRefCurrent.textContent = "Напишите с заглавной буквы";
        target.style.outline = "var(--input-warning-outline)";
      } else {
        setIsWarned(false);
        if (target.id === "name-input") {
          dispatch({ type: actionTypes.NAME_TRUE });
          appDispatch({ type: appActionTypes.NAME_ALTER }, target.value);
        } else if (target.id === "surname-input") {
          dispatch({ type: actionTypes.SURNAME_TRUE });
          appDispatch({ type: appActionTypes.SURNAME_ALTER }, target.value);
        }

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
