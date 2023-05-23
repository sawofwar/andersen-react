import React from "react";
import PropTypes from "prop-types";

import "./BioCard.css";

class BioCard extends React.Component {
  render() {
    return <form className="bio-card">{this.props.children}</form>;
  }
}

BioCard.propTypes = {
  children: PropTypes.node,
};

export default BioCard;
