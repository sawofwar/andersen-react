import Input from "../Input";

import { checkPhone } from "../../../utils/CheckPhone";

import "./../Input.css";

class Phone extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
    };
  }

  inputChangeHandler(event) {
    const isValid = checkPhone(event.target.value);

    if (isValid === "empty") {
      this.setState({ isWarned: false });
      event.target.style.outline = "var(--input-normal-outline)";
      return;
    }

    if (!isValid) {
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
          type="string"
          className="input-input"
          id={`${this.props.id}-input`}
          maxLength={12}
        />
        {this.state.isWarned && (
          <p className="input-warning">Формат: 7-7777-77-77</p>
        )}
      </div>
    );
  }
}

export default Phone;
