import PropTypes from "prop-types";

import "./Input.css";

import appActionTypes from "../../utils/AppActionTypes";

export const Input = ({ label, id, inputType, appDispatch }) => {
  const passBirthday = (event) => {
    appDispatch({ type: appActionTypes.BIRTHDAY_ALTER }, event.target.value);
  };

  return (
    <div className="input-block">
      <label className="input-label" htmlFor={`${id}-input`}>
        {label}
      </label>

      <input
        type={inputType}
        className="input-input"
        id={`${id}-input`}
        onChange={passBirthday}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  id: PropTypes.string,
  appDispatch: PropTypes.func,
};

export default Input;
