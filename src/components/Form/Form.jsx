import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";
import BioCard from "../BioCard/BioCard";

import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

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

  componentDidMount() {
    console.log(this.nameRef);
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
    // this.nameWarningRef.current.style.display = "none";
    // const inputs = document.querySelector;
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
          />
          <Name
            placeholder="Васильев"
            label="Фамилия"
            id="surname"
            forwardedRef={this.surnameRef}
          />
          <Input label="Дата рождения" inputType="date" id="date" />

          <Phone
            label="Телефон"
            placeholder="7-7777-77-77"
            id="phone-number"
            forwardedRef={this.phoneRef}
          />
          <Site
            placeholder="https://www.vasiliy.com"
            label="Сайт"
            id="website"
            forwardedRef={this.siteRef}
          />
        </div>

        <Buttons onCancel={this.formCancelHandler.bind(this)} />

        <BioCard></BioCard>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
};

export default Form;
