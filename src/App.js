
import React , {useReducer} from "react";


const initialState = {count: 0}

const reducer = (state, action) => {
  switch (action.type){
    case "increase":
    return {count:state.count + 1} ;

    case "decrease":
      return {count:state.count - 1};

      default: 
      return state;



  }


}

const App = () => {

   const [state, dispatch] =useReducer(reducer , initialState);
  


  const increaseCount = () => {
   dispatch({type : "increase"})
  };


  const decreaseCount = () => {
    dispatch ({type: "decrease"})
   
  };






  return (
    <div>
    <h2>count : {state.count}</h2>
      <button onClick = {increaseCount}> increase Count</button>
      <button onClick = {decreaseCount}>Decrease Count</button>
    
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

// UseReducer is used to manage state in react applications.
// It is used to write clean code when you are using multiple states hence being regarded as a state mananger.
// useReducer accepts two parameters ... (reducer function, default state)
// 