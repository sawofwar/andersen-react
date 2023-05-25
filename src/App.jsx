import "./App.css";
import React from "react";
import BigForm from "./components/BigForm/BigForm";

const initialState = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  site: "",
  description: "",
  stack: "",
  project: "",
};

const reducer = (state, action, value) => {
  console.log("hi from app reducer");
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  dispatch = (action) => {
    this.setState((prevState) => reducer(prevState, action));
  };

  bigFormCancelHandler() {
    console.log("");
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Создание анкеты</h1>

        <BigForm onCancel={this.bigFormCancelHandler.bind(this)}></BigForm>
      </div>
    );
  }
}

export default App;
