import React, { createRef } from "react";
import PropTypes from "prop-types";

import TextArea from "../TextArea/TextArea";

import "./BioCard.css";

class BioCard extends React.Component {
  constructor(props) {
    super(props);

    this.bioRef = createRef();
    this.stackRef = createRef();
    this.projectRef = createRef();

    this.passedState = this.props.passedState;
  }

  componentDidMount() {
    // const textAreas = [this.bioRef, this.stackRef, this.projectRef];
    // this.props.onMount(textAreas);
  }

  render() {
    return (
      <div className="bio-card">
        <TextArea
          ref={this.bioRef}
          placeholder="Меня зовут Василий..."
          label="О себе"
          id="bio"
          passedState={this.passedState}
          reducerState={this.props.reducerState}
          dispatch={this.props.dispatch}
        />
        <TextArea
          ref={this.stackRef}
          placeholder="У меня есть опыт с NodeJS, Express и MongoDB..."
          label="Стек технологий"
          id="tech-stack"
          passedState={this.passedState}
          reducerState={this.props.reducerState}
          dispatch={this.props.dispatch}
        />
        <TextArea
          ref={this.projectRef}
          placeholder="Я работал над приложением для банка..."
          label="Описание последнего проекта"
          id="last-project"
          passedState={this.passedState}
          reducerState={this.props.reducerState}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

BioCard.propTypes = {
  children: PropTypes.node,
  onMount: PropTypes.func,
  passedState: PropTypes.object,
  reducerState: PropTypes.object,
  dispatch: PropTypes.func,
};

export default BioCard;
