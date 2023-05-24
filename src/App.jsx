import "./App.css";

import BigForm from "./components/BigForm/BigForm";

function App() {
  const bigFormCancelHandler = () => {
    console.log("");
  };

  return (
    <div className="wrapper">
      <h1>Создание анкеты</h1>

      <BigForm onCancel={bigFormCancelHandler}></BigForm>
    </div>
  );
}

export default App;
