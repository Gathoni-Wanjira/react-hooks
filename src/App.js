import React , {useRef} from "react";



const App = () => {
  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current);
    inputEle.current.style.width = '300px';
  }



  return (
    <div>
      <input type="text" ref = {inputEle}></input>
      <button onClick = {handleClick}> Click Here</button>
      

    </div>
  );

};

export default App;


// Use effect is used to perform side effects on the components.
// Side effects are actions that are performed by the "outside world"
// We perform a side effect when we need to reach outside of a react component and do something.
// Common side effects include a) fetching data from an api.... updating the DOM document and Window .... setting timer functions like setTimeInterval, setTimeout
// Use effect hook accepts 2 arguments... one a callback and the other one  a dependency.
// Callback is executed when we want to execute the side logic(What to run)
// Dependencies is an optional argument and it contains an array of variables.(When to run)
// useEffect(callback , dependencies)

// UseContext is used to manage/access global state , user settings ,themes services ect.
// UseContext has 3 steps; 
// 1.Creating the context
// 2.providing the context
// 3.Consuming the context

// UseRef is used to access DOM elements 
// It is also used to create mutable variables which will not re-render the component.
