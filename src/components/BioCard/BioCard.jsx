import React from "react";
import PropTypes from "prop-types";

import TextArea from "../TextArea/TextArea";

import "./BioCard.css";

class BioCard extends React.Component {
  render() {
    return (
      <form className="bio-card">
        <TextArea placeholder="Меня зовут Василий..." label="О себе" id="bio" />
        <TextArea
          placeholder="У меня есть опыт с NodeJS, Express и MongoDB..."
          label="Стек технологий"
          id="tech-stack"
        />
        <TextArea
          placeholder="Я работал над приложением для банка..."
          label="Описание последнего проекта"
          id="last-project"
        />
      </form>
    );
  }
}

BioCard.propTypes = {
  children: PropTypes.node,
};

export default BioCard;
