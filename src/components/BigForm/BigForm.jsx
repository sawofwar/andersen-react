import React from "react";
import PropTypes from "prop-types";

import "./BigForm.css";
import Form from "../Form/Form";
import Name from "../Input/Name/Name";
import Input from "../Input/Input";
import Phone from "../Input/Phone/Phone";
import Site from "../Input/Site/Site";

class BigForm extends React.Component {
  constructor() {
    super();

    this.state = { resetTriggered: false };
  }

  getTextAreas([...args]) {
    // this.setState({ resetTriggered: true });
    // console.log(this.state.textAreas);

    args.forEach((field) => {
      const textArea = field.current.textAreaRef.current;
      console.log(textArea);
      // textArea.textContent = "";
    });
  }

  triggerReset() {
    this.setState({ resetTriggered: true });
  }

  render() {
    return (
      <div className="big-form">
        <Form>
          <div className="form-children">
            <Name placeholder="Василий" label="Имя" id="name" />
            <Name placeholder="Васильев" label="Фамилия" id="surname" />
            <Input label="Дата рождения" inputType="date" id="date" />

            <Phone
              label="Телефон"
              placeholder="7-7777-77-77"
              id="phone-number"
            />
            <Site
              placeholder="https://www.vasiliy.com"
              label="Сайт"
              id="website"
            />
          </div>
        </Form>
      </div>
    );
  }
}

BigForm.propTypes = {
  children: PropTypes.node,
};

export default BigForm;
