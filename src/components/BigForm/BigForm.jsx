import React from "react";
import PropTypes from "prop-types";

import "./BigForm.css";
import Form from "../Form/Form";

class BigForm extends React.Component {
  constructor() {
    super();

    this.state = { resetTriggered: false };
  }

  getTextAreas([...args]) {
    // this.setState({ resetTriggered: true });
    // console.log(this.state.textAreas);

    args.forEach((field) => {
      const textArea = field.current.textAreaRef.current;
      console.log(textArea);
      // textArea.textContent = "";
    });
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
