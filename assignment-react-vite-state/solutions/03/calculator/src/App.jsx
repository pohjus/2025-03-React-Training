import "./App.css";
import { useState } from "react";

function App() {
  const [n1, setN1] = useState(null);
  const [n2, setN2] = useState(null);

  const handleN1Change = (e) => {
    const value = e.target.value;
    setN1(value === "" ? null : parseInt(value));
  };

  const handleN2Change = (e) => {
    const value = e.target.value;
    setN2(value === "" ? null : parseInt(value));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Number 1"
        name="number1"
        onChange={handleN1Change}
      />
      <input
        type="number"
        placeholder="Number 2"
        name="number2"
        onChange={handleN2Change}
      />
      {n1 !== null && n2 !== null && <p>Sum: {n1 + n2}</p>}
    </div>
  );
}

export default App;
