import "./App.css";
import Input from "./components/Input/Input";
import Name from "./components/Input/Name/Name";

import TextArea from "./components/TextArea/TextArea";
import BigForm from "./components/BigForm/BigForm";
import Form from "./components/Form/Form";

import BioCard from "./components/BioCard/BioCard";

import Buttons from "./components/Buttons/Buttons";

function App() {
  return (
    <div className="wrapper">
      <h1>Создание анкеты</h1>

      <BigForm>
        <Form>
          <Name placeholder="Василий" label="Имя" id="name" />
          <Name placeholder="Васильев" label="Фамилия" id="surname" />
          <Input label="Дата рождения" inputType="date" id="date" />

          <Input
            label="Телефон"
            placeholder="7-7777-77-77"
            id="phone-number"
            inputType="number"
          />
          <Input placeholder="www.vasiliy.com" label="Сайт" id="website" />

          <Buttons />
        </Form>

        <BioCard>
          <TextArea
            placeholder="Меня зовут Василий..."
            label="О себе"
            id="bio"
          />
          <TextArea
            placeholder="У меня есть опыт с NodeJS, Express и MongoDB..."
            label="Стек технологий"
            id="tech-stack"
          />
          <TextArea
            placeholder="Я работал над приложением для банка..."
            label="Описание последнего проекта"
            id="last-project"
          />
        </BioCard>
      </BigForm>
    </div>
  );
}

export default App;
