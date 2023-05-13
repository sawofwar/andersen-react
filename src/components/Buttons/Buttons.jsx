import React from "react";

import "./Buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons-block">
        <button className="buttons-block__button">Сохранить</button>
        <button className="buttons-block__button--cancel">Отмена</button>
      </div>
    );
  }
}

export default Buttons;
