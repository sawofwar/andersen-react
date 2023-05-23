import React from "react";
import PropTypes from "prop-types";

import "./BigForm.css";
import Form from "../Form/Form";
import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

import BioCard from "../BioCard/BioCard";
import TextArea from "../TextArea/TextArea";

class BigForm extends React.Component {
  cancelHandler() {
    console.log("cancel input");
  }

  render() {
    return (
      <div className="big-form">
        <Form onCancel={this.cancelHandler.bind(this)}>
          <Name placeholder="Василий" label="Имя" id="name" />
          <Name placeholder="Васильев" label="Фамилия" id="surname" />
          <Input label="Дата рождения" inputType="date" id="date" />

          <Phone label="Телефон" placeholder="7-7777-77-77" id="phone-number" />
          <Site
            placeholder="https://www.vasiliy.com"
            label="Сайт"
            id="website"
          />
        </Form>

        <BioCard></BioCard>
      </div>
    );
  }
}

BigForm.propTypes = {
  children: PropTypes.node,
};

export default BigForm;
