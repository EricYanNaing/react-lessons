import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hello name="zyn" message="Hi There" />
      <Hello name="jason" message="Hello There" />
    </div>
  );
}

export default App;
