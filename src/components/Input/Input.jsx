import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="name-input">Имя</label>
        <input
          type="text"
          id="name-input"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
