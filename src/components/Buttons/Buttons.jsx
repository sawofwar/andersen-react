import PropTypes from "prop-types";

import "./Buttons.css";

function Buttons({ submitter, onCancel }) {
  const clickSubmitButtonHandler = () => {
    submitter();
    console.log("submit");
  };

  const clickCancelButtonHandler = () => {
    onCancel();
    console.log("cancel");
  };

  return (
    <div className="buttons-block">
      <button
        className="buttons-block__button"
        onClick={clickSubmitButtonHandler}
      >
        Сохранить
      </button>
      <button
        onClick={clickCancelButtonHandler}
        className="buttons-block__button--cancel"
      >
        Отмена
      </button>
    </div>
  );
}

Buttons.propTypes = {
  onCancel: PropTypes.func,
  submitter: PropTypes.func,
};

export default Buttons;
