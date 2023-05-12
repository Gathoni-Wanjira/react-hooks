import React from "react";
import { useState } from "react";

const App = () => {
 
  const [details , setDetails] = useState({counter: 0, name: ""});




  const increaseCounter = () => {
    setDetails((prev) => ({
      ...prev,
      counter:prev.counter + 1,
    }));
    
  }
  console.log(details);




  return (
    <div className="App">
      <input type= "text" onChange={e => (e.target.value)}/>
      <h1>{details.name} has clicked:{details.counter} times.</h1>
      <button onClick={increaseCounter}> Increase </button>

    </div>
  );
}

export default App;


// NOTES TO REMEMBER
// UseState hooks are functions used  to add State in a functional component.
// "State" are just values or variables of a component. 
// To use any hook ... you first need to import that hook from react library.