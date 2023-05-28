import { useRef } from "react";
import PropTypes from "prop-types";

import actionTypes from "../../utils/ActionTypes";

import Name from "../Input/Name/Name";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";
import Date from "../Input/Date/Date";

import Buttons from "../Buttons/Buttons";

import BioCard from "../BioCard/BioCard";

import "./Form.css";

const Form = ({ reducerState, dispatch, appDispatch, submitter }) => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const dateRef = useRef();
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
    dateRef.current.style.outline = "none";
    phoneRef.current.style.outline = "none";
    siteRef.current.style.outline = "none";

    const inputs = [
      nameRef.current,
      surnameRef.current,
      dateRef.current,
      phoneRef.current,
      siteRef.current,
    ];
    inputs.forEach((input) => (input.value = ""));

    const warnings = document.getElementsByClassName("input-warning");
    const warningsArray = Array.from(warnings);
    warningsArray.forEach((warning) => (warning.textContent = ""));

    console.log(warnings);

    const textareas = document.getElementsByClassName("textarea-textarea");
    const textareasArray = Array.from(textareas);
    textareasArray.forEach((textarea) => (textarea.style.outline = "none"));

    console.log(textareas);

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

        <Date
          label="Дата рождения"
          id="date"
          appDispatch={appDispatch}
          ref={dateRef}
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
  onCancel: PropTypes.func,
  reducerState: PropTypes.object,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
  submitter: PropTypes.func,
};
export default Form;
