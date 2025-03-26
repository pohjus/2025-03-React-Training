import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Output({ name }) {
  return <p>{name}</p>;
}

function Input({ clicked }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => clicked(input)}>Click</button>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  function change(inp) {
    setName(inp);
  }
  return (
    <div>
      <Input clicked={change} />
      <Output name={name} />
    </div>
  );
}
export default App;
