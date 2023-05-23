import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";
import BioCard from "../BioCard/BioCard";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }

  formSubmitHandler(e) {
    e.preventDefault();
  }

  formCancelHandler() {
    this.formRef.current.reset();
    this.props.onCancel();
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

        <Buttons onCancel={this.formCancelHandler.bind(this)} />

        <BioCard></BioCard>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
};

export default Form;
