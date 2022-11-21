import React,{useState} from 'react'
const Ammal = () => {
    const [count,setCount] = useState(0)
    const [todo,setTodo] = useState('')
    const [name,setName] = useState([])

    const handleClick = () =>{
        setCount(count+1)
        let arr = todo
        arr.push(name)
        console.log(arr)
        setTodo(arr)
    }
        return ( 
        <>
        <h2>count:{count}</h2>
        <button style={{border:"5px solid white"}}onClick={() => handleClick()}> + </button>
        <input onChange={(e) =>setName (e.target.value)}></input>
        {count!==0 &&<button onClick={() => setCount(count-1)} disabled={count === 0}>-</button>}
        <p>Enter ur value</p>
        
        {name}
  
     </>
     );
}
 
export default Ammal;