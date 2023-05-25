import "./App.css";
import React from "react";
import BigForm from "./components/BigForm/BigForm";

class App extends React.Component {
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
