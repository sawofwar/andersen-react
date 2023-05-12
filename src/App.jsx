import "./App.css";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="wrapper">
      <Form>
        <Input placeholder="Василий" />
      </Form>
    </div>
  );
}

export default App;
