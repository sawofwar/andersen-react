import { forwardRef } from "react";
import PropTypes from "prop-types";

import appActionTypes from "../../../utils/AppActionTypes";

import "../Input.css";

export const Date = forwardRef(({ label, id, appDispatch }, ref) => {
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
        min="1900-01-01"
        max="2023-01-01"
        className="input-input"
        id={`${id}-input`}
        onChange={passBirthday}
        ref={ref}
      />
    </div>
  );
});

Date.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  appDispatch: PropTypes.func,
};

Date.displayName = "Date";

export default Date;
