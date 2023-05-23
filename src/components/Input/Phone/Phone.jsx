import Input from "../Input";

import "./../Input.css";

class Phone extends Input {
  constructor(props) {
    super(props);

    this.state = {
      isWarned: false,
    };
  }

  inputChangeHandler() {}

  render() {
    return (
      <div className="input-block">
        <label className="input-label" htmlFor={`${this.props.id}-input`}>
          {this.props.label}
        </label>

        <input
          onChange={this.inputChangeHandler.bind(this)}
          placeholder={this.props.placeholder}
          type="number"
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

export default Phone;
