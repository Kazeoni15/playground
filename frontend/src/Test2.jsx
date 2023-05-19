import { useState } from "react";

export default function Test2(){
  const [data,setData]=useState([])
 const [item,setItem]=useState("") 
 
 function addItem(){
        setData(prev=>[...prev,data ])
 }




  return(
   
   

    <>
    <input type="text" onChange={e=>setData(e.target.value)}/>
    <button onClick={addItem}>add</button>
    <button>delete</button>
    </>
  )
    

}