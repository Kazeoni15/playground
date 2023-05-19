import { createContext, useContext, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Form from './Form'
// import Test from './Test';
// import Test2 from './Test2';
import Form1 from './Form1';

function App() {

  // const [modal, setModal] = useState(true)
  
  return (

    <>

    <Form1/>
    {/* <Test/> */}
    {/* <Test2/> */}
    
    {/* <Form/> */}
          {/* <button onClick={()=>{setModal(!modal)}}>open/close</button>

    <div className='container'>

{modal && <div className="card2"></div> }

<div className="card" id='box1'></div>
          <div className="card1"></div>

          <div className="card" id='box2'></div>
    </div> */}
    </>
    // <div className="App">
     
    //   <input value={input} onChange={(e) => setInput(e.target.value)} />{" "}
    //   <button
    //     onClick={() => {
    //       setList((prevItems) => [...prevItems, input]);
    //     }}
    //   >
    //     Add
    //   </button>
    //   <button
    //     onClick={() => {
    //       if(list.length>0){
    //         setList((prevItems) => list.slice(0,-1))
            
    //       }
         
    //     }}
    //   >
    //     Delete
    //   </button>
    //   {list.length > 0 &&
    //     list.map((item, index) => {
    //       return <div key={index}>{item}</div>;
    //     })}
    // </div>
  );

  // const expensiveCalculation = (num) => {
  //   console.log("Calculating...");
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  // return (
  //   <div>
  //     <div>
  //       Hello
  //       <h2>My Todos</h2>
  //       {todos.map((todo, index) => {
  //         return <p key={index}>{todo}</p>;
  //       })}
  //       <button onClick={addTodo}>Add Todo</button>
  //     </div>
  //     <hr />
  //     <div>
  //       Count: {count}
  //       <button onClick={increment}>+</button>
  //       <h2>Expensive Calculation</h2>
  //       {calculation}
  //     </div>
  //   </div>
  // );



}

export default App


