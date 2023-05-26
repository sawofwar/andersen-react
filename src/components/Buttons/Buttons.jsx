import PropTypes from "prop-types";

import "./Buttons.css";

/* class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  clickCancelButtonHandler() {
    this.props.onCancel();
  }

  clickSubmitButtonHandler() {
    this.props.submitter();
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
  submitter: PropTypes.func,
};
 */

function Buttons({ submitter, onCancel }) {
  const clickSubmitButtonHandler = () => {
    submitter();
  };

  const clickCancelButtonHandler = () => {
    onCancel();
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
