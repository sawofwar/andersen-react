import React from "react";
import PropTypes from "prop-types";

import "./TextArea.css";

const LINE_LENGTH = 70;

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="textarea-block">
        <label className="textarea-label" htmlFor={`${this.props.id}-textarea`}>
          {this.props.label}
        </label>
        <textarea
          placeholder={this.props.placeholder}
          className="textarea-textarea"
          id={`${this.props.id}-textarea`}
          maxLength={LINE_LENGTH * 7}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
