import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Frutis";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const [count, setCount] = useState(0);
  const person = {
    name: "zyn",
    message: "Hi There",
    seatnumbers: [1, 3, 5],
  };
  return (
    <div className="App">
      {/* <Hello person={person} /> */}
      {/* <Fruits /> */}
      <ConditionalComponent />
    </div>
  );
}

export default App;
