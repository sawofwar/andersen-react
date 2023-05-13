import "./App.css";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="wrapper">
      <Form>
        <Input placeholder="Василий" label="Имя" id="name" />
        <Input placeholder="Васильев" label="Фамилия" id="surname" />
        <Input label="Дата рождения" inputType="date" id="date" />
        <Input label="Телефон" placeholder="1-1111-11-11" id="phone-number" />
        <TextArea label="О себе" id="bio" />
      </Form>
    </div>
  );
}

export default App;
