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

    this.labelRef = React.createRef();

    this.state = {
      isWarned: false,
    };
  }

  componentDidMount() {
    console.log(this.labelRef.value);
  }

  inputChangeHandler(event) {
    const isCap = startsWithCapital(event.target.value);

    // reset if empty
    if (isCap === "empty") {
      this.setState({ isWarned: false });
      return;
    }

    if (!isCap) this.setState({ isWarned: true });
    else this.setState({ isWarned: false });
  }

  render() {
    return (
      <div className="input-block">
        <label
          className="input-label"
          htmlFor={`${this.props.id}-input`}
          ref={this.labelRef}
        >
          {this.props.label}

          {this.state.isWarned && "С заглавной"}
        </label>

        <input
          onChange={this.inputChangeHandler.bind(this)}
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
