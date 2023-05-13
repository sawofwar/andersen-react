import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

class Form extends React.Component {
  formSubmitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        className="form-card"
        action="submit"
        onSubmit={this.formSubmitHandler.bind(this)}
      >
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
