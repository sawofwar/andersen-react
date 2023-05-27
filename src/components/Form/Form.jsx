import { useRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";
import BioCard from "../BioCard/BioCard";

import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

import actionTypes from "../../utils/ActionTypes";

const Form = ({ reducerState, dispatch, appDispatch, submitter }) => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const phoneRef = useRef();
  const siteRef = useRef();
  const formRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const formCancelHandler = () => {
    formRef.current.reset();

    nameRef.current.style.outline = "none";
    surnameRef.current.style.outline = "none";
    phoneRef.current.style.outline = "none";
    siteRef.current.style.outline = "none";

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

    dispatch({ type: actionTypes.NAME_FALSE });
    dispatch({ type: actionTypes.SURNAME_FALSE });
    dispatch({ type: actionTypes.PHONE_FALSE });
    dispatch({ type: actionTypes.SITE_FALSE });
    dispatch({ type: actionTypes.DESCRIPTION_FALSE });
    dispatch({ type: actionTypes.STACK_FALSE });
    dispatch({ type: actionTypes.PROJECT_FALSE });
  };

  return (
    <form
      ref={formRef}
      className="form-card"
      action="submit"
      onSubmit={formSubmitHandler}
    >
      <div className="form-children">
        <Name
          placeholder="Василий"
          label="Имя"
          id="name"
          ref={nameRef}
          reducerState={reducerState}
          dispatch={dispatch}
          appDispatch={appDispatch}
        />
        <Name
          placeholder="Васильев"
          label="Фамилия"
          id="surname"
          ref={surnameRef}
          reducerState={reducerState}
          dispatch={dispatch}
          appDispatch={appDispatch}
        />
        <Input
          label="Дата рождения"
          inputType="date"
          id="date"
          appDispatch={appDispatch}
        />

        <Phone
          label="Телефон"
          placeholder="7-7777-77-77"
          id="phone-number"
          ref={phoneRef}
          reducerState={reducerState}
          dispatch={dispatch}
          appDispatch={appDispatch}
        />
        <Site
          placeholder="https://www.vasiliy.com"
          label="Сайт"
          id="website"
          ref={siteRef}
          reducerState={reducerState}
          dispatch={dispatch}
          appDispatch={appDispatch}
        />
      </div>

      <Buttons onCancel={formCancelHandler} submitter={submitter} />

      <BioCard
        reducerState={reducerState}
        dispatch={dispatch}
        appDispatch={appDispatch}
      />
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
  reducerState: PropTypes.object,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
  submitter: PropTypes.func,
};
export default Form;
