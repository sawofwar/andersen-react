import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.inputType = props.inputType ?? "text";
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor="name-input">
          {this.props.label}
        </label>
        <input
          type={this.inputType}
          placeholder={this.props.placeholder}
          style={{ height: `${this.props.heightInLines}px` }}
          className="input-input"
          id="name-input"
        />
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  heightInLines: PropTypes.number,
};

export default Input;
