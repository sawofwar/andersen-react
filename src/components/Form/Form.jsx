import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }

  componentDidMount() {
    console.log(this.formRef);
  }

  formSubmitHandler(e) {
    e.preventDefault();
  }

  cancelHandler() {
    // console.log("cancelHandler called");

    this.formRef?.current.reset();
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

        <Buttons onCancel={this.cancelHandler.bind(this)} />
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
