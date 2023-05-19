import { useState } from "react";

export default function Test() {
    const [list, setList] = useState([])
    const [value, setValue] = useState("")



    const add = () =>{

        setList(prevState=>[...prevState, value])
        console.log(list)
    }

    const deleteItem = () =>{

        let copy = [...list]
        copy.pop()
        
        setList(copy)

    }

    const deleteClicked = (selected)=>{
        let copy = [...list]


       let a =  copy.filter(item=>item!=selected)

        setList(a)
    }

  return (
    <div className="">
      <input type="text" onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>add()}>add</button>
      <button onClick={()=>deleteItem()}>delete</button>



      {list.map((item, index)=>{
        return(
            <div key={index}>
                {item}
                <button onClick={()=>deleteClicked(item)}>-</button>
            </div>
        )
      })}



    </div>
  );
}
