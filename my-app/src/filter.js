import React from 'react'
//import './style.css'
const Todoo = () => {
    const[todo,setTodo]=React.useState([])
    const[value,setValue] =React.useState('')
    const[edit,setEdit] =React.useState('')
    const[editValue,setEditValue] =React.useState('')
    const handleAdd=() =>{
        let temp=[...todo,{
            id :Math.floor(Math.random()*1000),
            value:value
        }]
           setTodo(temp)
           setValue("")
    }
    const handleDelete=(i) => {
        let temp=[...todo]
        temp=temp.filter(element=>i!==element.id)
        setTodo(temp)
        console.log(i)
    }
    //const handleEdit =(item)=>{

    //}
    return ( 
        <>
        <input type="text" onChange={(event) => setValue(event.target.value)}  />
            <button onClick={()=> handleAdd()}>Add</button>
            <ul>
            {todo.map((item)=><>
            <div id={item.id} style={{display:'flex'}}>
                {edit ? <input value ={editValue} onChange={(event)=>setEditValue(event.target.value)}type="text" />:
            <li key={item.id}>id:{item.id}Value:{item.value}</li>}
            <button style={{marginLeft:10,marginRight:10}}type="button" onClick={()=>{
                setEdit(item.id)
                setEditValue(item.value)}}>Edit</button>
            <button style={{marginLeft:10}}type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
           </div>
            </>)}

            </ul>
            

        </>
     );
}
 
export default Todoo;
