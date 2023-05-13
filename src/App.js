import React ,{useState , useEffect}from "react";


const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount , setOtherCount] = useState(5);
  
  useEffect (()  => {
    document.title = `${otherCount} new texts!`;

  }, [otherCount]);



  return(
    <div>
<h3>{count} new texts!</h3>
<button onClick={() => setCount(count +1 )}>Increase</button>
<h3>{otherCount} is here!</h3>
<button onClick={() => setOtherCount(otherCount +5)}>Increase by 5</button>
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