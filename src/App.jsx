import "./App.css";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import BigForm from "./components/BigForm/BigForm";
import Form from "./components/Form/Form";

import BioCard from "./components/Biocard/BioCard";

function App() {
  return (
    <div className="wrapper">
      <BigForm>
        <Form>
          <Input placeholder="Василий" label="Имя" id="name" />
          <Input placeholder="Васильев" label="Фамилия" id="surname" />
          <Input label="Дата рождения" inputType="date" id="date" />
          <Input label="Телефон" placeholder="1-1111-11-11" id="phone-number" />
        </Form>
        <BioCard>
          <TextArea label="О себе" id="bio" />
        </BioCard>
      </BigForm>
    </div>
  );
}

export default App;
