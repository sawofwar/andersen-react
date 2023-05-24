import React from "react";
import PropTypes from "prop-types";

import "./BigForm.css";
import Form from "../Form/Form";

class BigForm extends React.Component {
  constructor() {
    super();

    this.state = { resetTriggered: false };
  }

  triggerReset() {
    this.setState({ resetTriggered: true });
  }

  render() {
    return (
      <div className="big-form">
        <Form></Form>
      </div>
    );
  }
}

BigForm.propTypes = {
  children: PropTypes.node,
};

export default BigForm;
