import "./App.css";
import { useState } from "react";
import BigForm from "./components/BigForm/BigForm";

import appActionTypes from "./utils/AppActionTypes";

const initialState = {
  name: "Марина",
  surname: "Марина",
  birthday: "20-02-2000",
  phone: "8-8888-88-88",
  site: "https://marina.com",
  description: "МаринаМарина",
  stack: "МаринаМарина",
  project: "МаринаМаринаМарина",
  submitted: false,
};

const reducer = (state, action, value) => {
  switch (action.type) {
    case appActionTypes.NAME_ALTER:
      return { ...state, name: value };

    case appActionTypes.SURNAME_ALTER:
      return { ...state, surname: value };

    case appActionTypes.BIRTHDAY_ALTER:
      return { ...state, birthday: value };

    case appActionTypes.PHONE_ALTER:
      return { ...state, phone: value };

    case appActionTypes.SITE_ALTER:
      return { ...state, site: value };

    case appActionTypes.DESCRIPTION_ALTER:
      return { ...state, description: value };

    case appActionTypes.STACK_ALTER:
      return { ...state, stack: value };

    case appActionTypes.PROJECT_ALTER:
      return { ...state, project: value };

    case appActionTypes.SUBMIT:
      return { ...state, submitted: true };
  }
};

const App = () => {
  const [state, setState] = useState(initialState);

  const dispatch = (action, value) => {
    setState((prevState) => reducer(prevState, action, value));
  };

  const bigFormSubmitHandler = () => {
    dispatch({ type: appActionTypes.SUBMIT });
  };

  return (
    <div className="wrapper">
      {state.submitted ? (
        <>
          <h1>{`${state.name} ${state.surname}`}</h1>
          <section className="submitted-info">
            <p className="submitted-info__birthday">
              <strong>Дата рождения:</strong> &nbsp; &nbsp; {state.birthday}
            </p>
            <p className="submitted-info__phone">
              <strong>Телефон:</strong> &nbsp; &nbsp; {state.phone}
            </p>
            <p className="submitted-info__site">
              <strong>Сайт:</strong> &nbsp; &nbsp; {state.site}
            </p>
            <p className="submitted-info__description">
              <strong className="textarea-strong">О себе:</strong>
              <br /> <br /> {state.description}
            </p>
            <p className="submitted-info__stack">
              <strong className="textarea-strong">Стек технологий:</strong>
              <br /> <br />
              {state.stack}
            </p>
            <p className="submitted-info__project">
              <strong className="textarea-strong">
                Описание последнего проекта:
              </strong>
              <br /> <br />
              {state.project}
            </p>
          </section>
        </>
      ) : (
        <>
          <h1>Создание анкеты</h1>
          <BigForm
            appState={state}
            appDispatch={dispatch}
            submitter={bigFormSubmitHandler}
          />
        </>
      )}
    </div>
  );
};

export default App;
