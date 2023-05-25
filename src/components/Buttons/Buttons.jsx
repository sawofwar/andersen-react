import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  clickCancelButtonHandler() {
    this.props.onCancel();
  }

  clickSubmitButtonHandler() {
    console.log("hello from submitter");
  }

  render() {
    return (
      <div className="buttons-block">
        <button
          className="buttons-block__button"
          onClick={this.clickSubmitButtonHandler.bind(this)}
        >
          Сохранить
        </button>
        <button
          onClick={this.clickCancelButtonHandler.bind(this)}
          className="buttons-block__button--cancel"
        >
          Отмена
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Buttons;
