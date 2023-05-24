import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.id = props.id;
    this.inputType = props.inputType;
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
};

export default Input;
