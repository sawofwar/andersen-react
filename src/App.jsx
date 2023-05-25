import "./App.css";
import React from "react";
import BigForm from "./components/BigForm/BigForm";

import appActionTypes from "./utils/AppActionTypes";

const initialState = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  site: "",
  description: "",
  stack: "",
  project: "",
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
      console.log("submitted");
      return { ...state, submitted: true };
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    setInterval(() => {
      console.table(this.state);
      // console.log(this.state.description);
    }, 5000);
  }

  dispatch = (action, value) => {
    this.setState((prevState) => reducer(prevState, action, value));
  };

  bigFormSubmitHandler() {
    this.dispatch({ type: appActionTypes.SUBMIT });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Создание анкеты</h1>

        <BigForm
          appState={this.state}
          appDispatch={this.dispatch}
          submitter={this.bigFormSubmitHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
