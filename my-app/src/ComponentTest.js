
import React,{useState} from 'react';

function ComponentTest() {
    const [list,setList]=useState(['h','r'])
    const [flag,setFlag]=useState(false)
    const ListArr=['h','r']
    const value=React.createRef()
    const  handleClick=(e)=>{
        e.preventDefault()
        let iteam=value.current.value
        list.push(iteam)
       // ListArr.push(iteam)
        console.log(list)
    }

    const printList=(e)=>{
       e.preventDefault()
       console.log(ListArr)
        setFlag({flag:true})
        
         console.log(list)
    }
  return <div>
      <form>
        <input type="text" ref={value}></input>
        <button onClick={handleClick}>Submit</button>
        <button onClick={printList}>Print List</button>
        
          
        
        </form>
        <ol>
        {list.map(ele=>(<li key={ele}>{ele}</li>))}</ol>
  </div>;
}

export default ComponentTest;
