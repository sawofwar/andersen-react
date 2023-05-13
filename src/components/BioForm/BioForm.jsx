import React from "react";
import PropTypes from "prop-types";

import "./BioForm.css";

class BioCard extends React.Component {
  render() {
    return <div className="bio-card">{this.props.children}</div>;
  }
}

BioCard.propTypes = {
  children: PropTypes.node,
};

export default BioCard;
