import "./App.css";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="wrapper">
      <form action="submit">
        <Input placeholder="Василий" />
      </form>
    </div>
  );
}

export default App;
