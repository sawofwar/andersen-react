import { useReducer } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../utils/ActionTypes";

import Form from "../Form/Form";

import "./BigForm.css";

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

const BigForm = ({ appDispatch, submitter }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitterHandler = () => {
    const booleanValuesFromState = Object.values(state);
    const allAreTrue = booleanValuesFromState.every((value) => value === true);

    if (allAreTrue) submitter();
  };

  return (
    <div className="big-form">
      <Form
        dispatch={dispatch}
        reducerState={state}
        appDispatch={appDispatch}
        submitter={submitterHandler}
      ></Form>
    </div>
  );
};

BigForm.propTypes = {
  appDispatch: PropTypes.func,
  submitter: PropTypes.func,
};

export default BigForm;
