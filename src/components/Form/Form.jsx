import React, { createRef } from "react";
import PropTypes from "prop-types";

import Buttons from "../Buttons/Buttons";

import "./Form.css";
import BioCard from "../BioCard/BioCard";

import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
    this.inputsRef = createRef();
  }

  componentDidMount() {}

  formSubmitHandler(e) {
    e.preventDefault();
  }

  formCancelHandler() {
    this.formRef.current.reset();

    const inputs = document.querySelector;
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
          <Name placeholder="Василий" label="Имя" id="name" />
          <Name placeholder="Васильев" label="Фамилия" id="surname" />
          <Input label="Дата рождения" inputType="date" id="date" />

          <Phone label="Телефон" placeholder="7-7777-77-77" id="phone-number" />
          <Site
            placeholder="https://www.vasiliy.com"
            label="Сайт"
            id="website"
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
