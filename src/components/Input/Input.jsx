import React from "react";
import PropTypes from "prop-types";

import { startsWithCapital } from "../../utils/CheckName";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.inputType = props.inputType;

    this.id = props.id;
  }

  componentDidMount() {
    // console.log(this.id);
  }

  inputChangeHandler(event) {
    console.log(startsWithCapital(event.target.value));
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor={`${this.props.id}-input`}>
          {this.props.label}
        </label>

        <input
          onChange={this.inputChangeHandler}
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
