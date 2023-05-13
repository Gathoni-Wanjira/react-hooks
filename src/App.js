import React ,{useState , useEffect, useContext}from "react";


const App = () => {
  co

  return(
    <div>

<h3>{time} in seconds!</h3>

    </div>
  );
}



export default App;


// Use effect is used to perform side effects on the components.
// Side effects are actions that are performed by the "outside world"
// We perform a side effect when we need to reach outside of a react component and do something.
// Common side effects include a) fetching data from an api.... updating the DOM document and Window .... setting timer functions like setTimeInterval, setTimeout
// Use effect hook accepts 2 arguments... one a callback and the other one  a dependency.
// Callback is executed when we want to execute the side logic(What to run)
// Dependencies is an optional argument and it contains an array of variables.(When to run)
// useEffect(callback , dependencies)