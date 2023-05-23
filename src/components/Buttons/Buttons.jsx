import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    // this.onCancel = this.props?.onCancel;
  }

  clickCancelButtonHandler() {
    this.props.onCancel();
  }

  render() {
    return (
      <div className="buttons-block">
        <button className="buttons-block__button">Сохранить</button>
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
};

export default Buttons;
