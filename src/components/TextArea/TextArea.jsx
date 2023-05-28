import { useRef, useState } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../utils/ActionTypes";
import appActionTypes from "../../utils/AppActionTypes";

import "./TextArea.css";

const MAX_LENGTH = 600;

const TextArea = ({ dispatch, appDispatch, id, label, placeholder }) => {
  const textAreaRef = useRef();
  const spanRef = useRef();
  const [isWarned, setIsWarned] = useState(false);

  const textAreaChangeHandler = (event) => {
    const input = event.target.value;
    const lengthIndicator = spanRef.current;

    lengthIndicator.textContent = input.length;

    if (input.length > MAX_LENGTH) {
      setIsWarned(true);

      if (event.target.id === "bio-textarea") {
        dispatch({ type: actionTypes.DESCRIPTION_FALSE });
      } else if (event.target.id === "tech-stack-textarea") {
        dispatch({ type: actionTypes.STACK_FALSE });
      } else if (event.target.id === "last-project-textarea") {
        dispatch({ type: actionTypes.PROJECT_FALSE });
      }

      dispatch({ type: actionTypes.DESCRIPTION_FALSE });

      event.target.style.outline = "var(--input-warning-outline)";
    } else if (input.length === 0) {
      if (event.target.id === "bio-textarea") {
        dispatch({ type: actionTypes.DESCRIPTION_FALSE });
      } else if (event.target.id === "tech-stack-textarea") {
        dispatch({ type: actionTypes.STACK_FALSE });
      } else if (event.target.id === "last-project-textarea") {
        dispatch({ type: actionTypes.PROJECT_FALSE });
      }
    } else {
      setIsWarned(false);

      if (event.target.id === "bio-textarea") {
        dispatch({ type: actionTypes.DESCRIPTION_TRUE });

        appDispatch(
          { type: appActionTypes.DESCRIPTION_ALTER },
          event.target.value
        );
      } else if (event.target.id === "tech-stack-textarea") {
        dispatch({ type: actionTypes.STACK_TRUE });
        appDispatch({ type: appActionTypes.STACK_ALTER }, event.target.value);
      } else if (event.target.id === "last-project-textarea") {
        dispatch({ type: actionTypes.PROJECT_TRUE });
        appDispatch({ type: appActionTypes.PROJECT_ALTER }, event.target.value);
      }
      event.target.style.outline = "none";
    }
  };

  return (
    <div className="textarea-block">
      <label className="textarea-label" htmlFor={`${id}-textarea`}>
        {label}
      </label>
      <textarea
        ref={textAreaRef}
        onChange={textAreaChangeHandler}
        placeholder={placeholder}
        className="textarea-textarea"
        id={`${id}-textarea`}
      />
      <div className="length-and-warning">
        {isWarned && (
          <p className="textarea__input-warning">Не более 600 символов</p>
        )}

        <p className="length-indicator">
          <span ref={spanRef}>0</span>
          /600
        </p>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default TextArea;
