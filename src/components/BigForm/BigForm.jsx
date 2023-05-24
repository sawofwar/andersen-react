import React from "react";

import "./BigForm.css";
import Form from "../Form/Form";

import actionTypes from "../../utils/ActionTypes";

const initialState = {
  nameValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NAME_TRUE:
      return { nameValid: true };
  }
};

class BigForm extends React.Component {
  constructor() {
    super();

    this.state = initialState;
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
        <Form dispatch={this.dispatch} reducerState={this.initialState}></Form>
      </div>
    );
  }
}

export default BigForm;
