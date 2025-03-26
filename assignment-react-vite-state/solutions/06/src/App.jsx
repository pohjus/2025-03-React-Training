import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Person from "./components/Person.jsx";

function App() {
  let [id, setId] = useState(1);
  return (
    <div>
      <h1>SW Api</h1>
      <input type="number" onChange={(e) => setId(Number(e.target.value))} />
      <Person id={id} />
    </div>
  );
}

export default App;
