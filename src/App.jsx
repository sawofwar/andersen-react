import "./App.css";
import React from "react";
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

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     console.log(this.state);
  //     // console.log(this.state.description);
  //   }, 5000);
  // }

  dispatch = (action, value) => {
    this.setState((prevState) => reducer(prevState, action, value));
  };

  bigFormSubmitHandler() {
    this.dispatch({ type: appActionTypes.SUBMIT });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.submitted ? (
          <>
            <h1>{`${this.state.name} ${this.state.surname}`}</h1>
            <section className="submitted-info">
              <p className="submitted-info__birthday">
                <strong>Дата рождения</strong>: {this.state.birthday}
              </p>
              <p className="submitted-info__phone">
                <strong>Телефон</strong>: {this.state.phone}
              </p>
              <p className="submitted-info__site">
                <strong>Сайт</strong>: {this.state.site}
              </p>
              <p className="submitted-info__description">
                <strong className="textarea-strong">О себе</strong>:<br />{" "}
                <br /> {this.state.description}
              </p>
              <p className="submitted-info__stack">
                <strong className="textarea-strong">Стек технологий</strong>:
                <br /> <br />
                {this.state.stack}
              </p>
              <p className="submitted-info__project">
                <strong className="textarea-strong">
                  Описание последнего проекта
                </strong>
                : <br /> <br />
                {this.state.project}
              </p>
            </section>
          </>
        ) : (
          <>
            <h1>Создание анкеты</h1>
            <BigForm
              appState={this.state}
              appDispatch={this.dispatch}
              submitter={this.bigFormSubmitHandler.bind(this)}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
