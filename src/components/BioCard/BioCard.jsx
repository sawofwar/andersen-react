import PropTypes from "prop-types";

import TextArea from "../TextArea/TextArea";

import "./BioCard.css";

const BioCard = ({ dispatch, appDispatch, reducerState }) => {
  // useEffect(() => {
  // const textAreas = [bioRef, stackRef, projectRef];
  // onMount(textAreas);
  // }, [onMount]);

  return (
    <div className="bio-card">
      <TextArea
        placeholder="Меня зовут Василий..."
        label="О себе"
        id="bio"
        reducerState={reducerState}
        dispatch={dispatch}
        appDispatch={appDispatch}
      />
      <TextArea
        placeholder="У меня есть опыт с NodeJS, Express и MongoDB..."
        label="Стек технологий"
        id="tech-stack"
        reducerState={reducerState}
        dispatch={dispatch}
        appDispatch={appDispatch}
      />
      <TextArea
        placeholder="Я работал над приложением для банка..."
        label="Описание последнего проекта"
        id="last-project"
        reducerState={reducerState}
        dispatch={dispatch}
        appDispatch={appDispatch}
      />
    </div>
  );
};

BioCard.propTypes = {
  reducerState: PropTypes.object,
  dispatch: PropTypes.func,
  appDispatch: PropTypes.func,
};

export default BioCard;
