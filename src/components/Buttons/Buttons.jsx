import React from "react";

import "./Buttons.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  clickCancelButtonHandler(event) {
    console.log(event.currentTarget);
  }

  render() {
    return (
      <div className="buttons-block">
        <button className="buttons-block__button">Сохранить</button>
        <button
          onClick={this.clickCancelButtonHandler}
          className="buttons-block__button--cancel"
        >
          Отмена
        </button>
      </div>
    );
  }
}

export default Buttons;
