import React from "react";
import PropTypes from "prop-types";

import { startsWithCapital } from "../../utils/CheckName";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.id = props.id;
    this.inputType = props.inputType;

    this.state = {
      isWarned: false,
    };
  }

  componentDidMount() {}

  inputChangeHandler(event) {
    const isCap = startsWithCapital(event.target.value);

    // reset if empty
    if (isCap === "empty") {
      this.setState({ isWarned: false });
      event.target.style.outline = "var(--input-normal-outline)";
      return;
    }

    // toggle warning on change
    if (!isCap) {
      this.setState({ isWarned: true });
      event.target.style.outline = "var(--input-warning-outline)";
    } else {
      this.setState({ isWarned: false });
      event.target.style.outline = "var(--input-normal-outline)";
    }
  }

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor={`${this.props.id}-input`}>
          {this.props.label}
        </label>

        <input
          onChange={this.inputChangeHandler.bind(this)}
          placeholder={this.props.placeholder}
          type={this.inputType}
          className="input-input"
          id={`${this.props.id}-input`}
        />
        {this.state.isWarned && (
          <p className="input-warning">Напишите с заглавной буквы</p>
        )}
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
