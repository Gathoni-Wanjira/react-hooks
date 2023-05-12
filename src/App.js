import React from "react";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);



  const increaseCounter = () => {
    setCounter(counter + 1)
  }
  console.log(counter);




  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={increaseCounter}> Increase </button>

    </div>
  );
}

export default App;


// NOTES TO REMEMBER
// UseState hooks are functions used  to add State in a functional component.
// "State" are just values or variables of a component. 
// To use any hook ... you first need to import that hook from react library.