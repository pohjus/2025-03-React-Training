import "./App.css";

import { useState } from "react";

function App() {
  let [random, setRandom] = useState(Math.random());

  // ES6 style function, you can also use traditional approach
  const click = () => {
    setRandom(Math.random());
  };

  return (
    <div>
      <button onClick={click}>Calculate</button>
      <p>Result = {random}</p>
    </div>
  );
}

export default App;
