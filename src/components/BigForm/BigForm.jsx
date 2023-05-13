import React from "react";
import PropTypes from "prop-types";

import "./BigForm.css";
// import Form from "../Form/Form";

class BigForm extends React.Component {
  render() {
    return <div className="big-form">{this.props.children}</div>;
  }
}

BigForm.propTypes = {
  children: PropTypes.node,
};

export default BigForm;
