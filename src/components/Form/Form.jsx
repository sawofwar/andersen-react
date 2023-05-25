import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";
import BioCard from "../BioCard/BioCard";

import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

import actionTypes from "../../utils/ActionTypes";

//TODO: add prop visibility to pass it down and adjust warnings?

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = createRef();
    this.surnameRef = createRef();
    this.phoneRef = createRef();
    this.siteRef = createRef();

    this.inputsRef = createRef();

    this.formRef = createRef();
  }

  formSubmitHandler(e) {
    e.preventDefault();
  }

  formCancelHandler() {
    this.formRef.current.reset();

    this.nameRef.current.style.outline = "none";
    this.surnameRef.current.style.outline = "none";
    this.phoneRef.current.style.outline = "none";
    this.siteRef.current.style.outline = "none";

    const inputs = document.getElementsByClassName("input-input");
    const inputsArray = Array.from(inputs);
    inputsArray.forEach((input) => (input.value = ""));

    const warnings = document.getElementsByClassName("input-warning");
    const warningsArray = Array.from(warnings);
    warningsArray.forEach((warning) => (warning.textContent = ""));

    const textareas = document.getElementsByClassName("textarea-textarea");
    const textareasArray = Array.from(textareas);
    textareasArray.forEach((textarea) => (textarea.style.outline = "none"));

    const textareaWarnings = document.getElementsByClassName(
      "textarea__input-warning"
    );
    const textareaWarningsArray = Array.from(textareaWarnings);
    textareaWarningsArray.forEach((warning) => {
      warning.textContent = "";
    });

    this.props.dispatch({ type: actionTypes.NAME_FALSE });
    this.props.dispatch({ type: actionTypes.SURNAME_FALSE });
    this.props.dispatch({ type: actionTypes.PHONE_FALSE });
    this.props.dispatch({ type: actionTypes.SITE_FALSE });
    this.props.dispatch({ type: actionTypes.DESCRIPTION_FALSE });
    this.props.dispatch({ type: actionTypes.STACK_FALSE });
    this.props.dispatch({ type: actionTypes.PROJECT_FALSE });
  }

  componentDidMount() {
    // this.props.dispatch({ type: actionTypes.NAME_FALSE });
    /* name, surname, phone, site, description, stack, project */
  }

  render() {
    return (
      <form
        ref={this.formRef}
        className="form-card"
        action="submit"
        onSubmit={this.formSubmitHandler.bind(this)}
      >
        <div className="form-children">
          <Name
            placeholder="Василий"
            label="Имя"
            id="name"
            forwardedRef={this.nameRef}
            reducerState={this.props.reducerState}
            dispatch={this.props.dispatch}
            appDispatch={this.props.appDispatch}
          />
          <Name
            placeholder="Васильев"
            label="Фамилия"
            id="surname"
            forwardedRef={this.surnameRef}
            reducerState={this.props.reducerState}
            dispatch={this.props.dispatch}
            appDispatch={this.props.appDispatch}
          />
          <Input
            label="Дата рождения"
            inputType="date"
            id="date"
            appDispatch={this.props.appDispatch}
          />

          <Phone
            label="Телефон"
            placeholder="7-7777-77-77"
            id="phone-number"
            forwardedRef={this.phoneRef}
            reducerState={this.props.reducerState}
            dispatch={this.props.dispatch}
            appDispatch={this.props.appDispatch}
          />
          <Site
            placeholder="https://www.vasiliy.com"
            label="Сайт"
            id="website"
            forwardedRef={this.siteRef}
            reducerState={this.props.reducerState}
            dispatch={this.props.dispatch}
            appDispatch={this.props.appDispatch}
          />
        </div>

        <Buttons
          onCancel={this.formCancelHandler.bind(this)}
          onSubmit={this.props.onSubmit}
        />

        <BioCard
          reducerState={this.props.reducerState}
          dispatch={this.props.dispatch}
          appDispatch={this.props.appDispatch}
        />
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
  reducerState: PropTypes.object,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
