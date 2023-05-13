import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const LINE_LENGTH = 70;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.inputType = props.inputType ?? "text";

    this.inputStyle = {
      height: `calc(calc(var(--margin-small) * 5) * ${this.props.heightInLines})`,
    };
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor="name-input">
          {this.props.label}
        </label>

        {this.props.tag ? (
          <textarea></textarea>
        ) : (
          <input
            placeholder={this.props.placeholder}
            type={this.inputType}
            style={this.props.heightInLines && this.inputStyle}
            maxLength={
              this.props.heightInLines && LINE_LENGTH * this.props.heightInLines
            }
            className="input-input"
            id="name-input"
          />
        )}
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  heightInLines: PropTypes.number,
  tag: PropTypes.string,
};

export default Input;
