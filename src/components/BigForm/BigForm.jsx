import React from "react";

import "./BigForm.css";
import Form from "../Form/Form";

import actionTypes from "../../utils/ActionTypes";

import PropTypes from "prop-types";

const initialState = {
  nameValid: false,
  surnameValid: false,
  phoneValid: false,
  siteValid: false,
  descriptionValid: false,
  stackValid: false,
  projectValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NAME_TRUE:
      return { ...state, nameValid: true };

    case actionTypes.NAME_FALSE:
      return { ...state, nameValid: false };

    case actionTypes.SURNAME_TRUE:
      return { ...state, surnameValid: true };

    case actionTypes.SURNAME_FALSE:
      return { ...state, surnameValid: false };

    case actionTypes.PHONE_TRUE:
      return { ...state, phoneValid: true };

    case actionTypes.PHONE_FALSE:
      return { ...state, phoneValid: false };

    case actionTypes.SITE_TRUE:
      return { ...state, siteValid: true };

    case actionTypes.SITE_FALSE:
      return { ...state, siteValid: false };

    case actionTypes.DESCRIPTION_TRUE:
      return { ...state, descriptionValid: true };

    case actionTypes.DESCRIPTION_FALSE:
      return { ...state, descriptionValid: false };

    case actionTypes.STACK_TRUE:
      return { ...state, stackValid: true };

    case actionTypes.STACK_FALSE:
      return { ...state, stackValid: false };

    case actionTypes.PROJECT_TRUE:
      return { ...state, projectValid: true };

    case actionTypes.PROJECT_FALSE:
      return { ...state, projectValid: false };
  }
};

class BigForm extends React.Component {
  constructor() {
    super();

    this.state = initialState;
  }

  componentDidMount() {
    // setInterval(() => {
    //   console.table(this.state);
    // }, 500);
  }

  dispatch = (action) => {
    this.setState((prevState) => reducer(prevState, action));
  };

  bigFormClickHandler(event) {
    const saveButtonClass = "buttons-block__button";
    const buttonClass = event.target.classList.value;
    if (buttonClass === saveButtonClass) console.log("save button");
  }

  render() {
    return (
      <div className="big-form" onClick={this.bigFormClickHandler.bind(this)}>
        <Form
          dispatch={this.dispatch}
          reducerState={this.state}
          appDispatch={this.props.appDispatch}
        ></Form>
      </div>
    );
  }
}

BigForm.propTypes = {
  appDispatch: PropTypes.func,
};

export default BigForm;
