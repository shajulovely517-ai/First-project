import {useState } from "react";

function App () {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}
export default App;