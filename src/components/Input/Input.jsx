import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

import appActionTypes from "../../utils/AppActionTypes";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.id = props.id;
    this.inputType = props.inputType;
  }

  passBirthday(event) {
    this.props.appDispatch(
      { type: appActionTypes.BIRTHDAY_ALTER },
      event.target.value
    );
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor={`${this.props.id}-input`}>
          {this.props.label}
        </label>

        <input
          placeholder={this.props.placeholder}
          type={this.inputType}
          className="input-input"
          id={`${this.props.id}-input`}
          onChange={this.passBirthday.bind(this)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  id: PropTypes.string,
  appDispatch: PropTypes.func,
};

export default Input;
