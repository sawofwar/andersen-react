import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.inputType = this.props.inputType ?? "text";
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor="name-input">
          {this.props.label}
        </label>
        <input
          type={this.inputType}
          className="input-input"
          id="name-input"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
};

export default Input;
