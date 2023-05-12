import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <form className="form-card" action="submit">
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
