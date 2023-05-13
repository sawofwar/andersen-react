import "./App.css";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="wrapper">
      <Form>
        <Input placeholder="Василий" label="Имя" />
        <Input placeholder="Васильев" label="Фамилия" />
        <Input label="Дата рождения" inputType="date" />
        <Input label="Телефон" placeholder="1-1111-11-11" />
        {/* <Input placeholder="yoursite.com" label="Сайт" /> */}
        <Input label="О сeбe" heightInLines={7} />
        {/* <Input label="Стек технологий" /> */}
        {/* <Input label="Описание последнего проекта" /> */}
      </Form>
    </div>
  );
}

export default App;
