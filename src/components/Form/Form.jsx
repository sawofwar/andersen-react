import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }

  formSubmitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        ref={this.formRef}
        className="form-card"
        action="submit"
        onSubmit={this.formSubmitHandler.bind(this)}
      >
        {this.props.children}

        <Buttons />
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
