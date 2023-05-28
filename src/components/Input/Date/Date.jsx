import PropTypes from "prop-types";

import "../Input.css";

import appActionTypes from "../../../utils/AppActionTypes";

export const Date = ({ label, id, appDispatch }) => {
  const passBirthday = (event) => {
    appDispatch({ type: appActionTypes.BIRTHDAY_ALTER }, event.target.value);
  };

  return (
    <div className="input-block">
      <label className="input-label" htmlFor={`${id}-input`}>
        {label}
      </label>

      <input
        type="date"
        className="input-input"
        id={`${id}-input`}
        onChange={passBirthday}
      />
    </div>
  );
};

Date.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  appDispatch: PropTypes.func,
};

export default Date;
