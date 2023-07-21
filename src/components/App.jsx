import React, { useState } from "react";

function App() {
  const [key, setkey] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(event) {
    setkey(event.target.value);
  }

  function handleclick() {
    setitems((preVal) => [...preVal, key]);

    setkey([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={key} type="text" />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
