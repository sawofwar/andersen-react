import Input from "../Input";

import { checkPhone } from "../../../utils/CheckPhone";

import "./../Input.css";
import { createRef } from "react";

class Phone extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
    };

    this.warningRef = createRef();
  }

  inputChangeHandler(event) {
    const isValid = checkPhone(event.target.value);

    if (isValid === "empty") {
      this.setState({ isWarned: false });
      // event.target.style.outline = "var(--input-normal-outline)";
      event.target.style.outline = "none";
      return;
    }

    if (!isValid) {
      this.setState({ isWarned: true });
      event.target.style.outline = "var(--input-warning-outline)";
      const warningRefCurrent = this.warningRef?.current ?? { textContent: "" };
      warningRefCurrent.textContent = "Формат: 7-7777-77-77";
    } else {
      this.setState({ isWarned: false });
      event.target.style.outline = "none";
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
          type="string"
          className="input-input"
          id={`${this.props.id}-input`}
          maxLength={12}
          ref={this.props.forwardedRef}
        />
        {this.state.isWarned && (
          <p className="input-warning" ref={this.warningRef}>
            Формат: 7-7777-77-77
          </p>
        )}
      </div>
    );
  }
}

export default Phone;
