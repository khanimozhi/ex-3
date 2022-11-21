import React from 'react'

const  Todo = ()=>{
    const[todo,setTodo]=React.useState([])
    const[value,setValue]=React.useState('')
    const[edit,setEdit]=React.useState(false)
    const [editValue,setEditValue]=React.useState('')
    const handleClick =()=>{
        let temp=[...todo,{
            id: Math.floor(Math.random()*1000),
            value: value
        }]
// {
    // key: 'value',
// }
        setTodo(temp)
        setValue("")
    }
    const handleDelete=(i)=>{
        let temp=[...todo]
        temp=temp.filter(element =>i !== element.id)
        setTodo(temp)
        console.log(i)
    }
    const handleSubmit=(i)=>{
        let temp=[...todo]
        temp[i].value=editValue
        setTodo(temp)
        setEdit(false)
    }
    return(
        <>
        <input onChange={(e)=>setValue(e.target.value)} type="text"/>
        <button type="button" onClick={()=>handleClick()}>Add</button>
        <ul>
            {todo.map((item,index)=><>
            
            {edit? 
              edit=== item.id && <>
                <input value={editValue}onChange={(e) =>setEditValue(e.target.value)}type="text"/>
                <button style={{marginLeft:10}}type="button" onClick={()=>handleSubmit(index)}>Ok</button>
            </>
            :      
            <>      
            <li key={item.id}>Value:{item.value}</li>
            <button style={{marginLeft:10,marginRight:10}}type="button" onClick={()=>{
            setEdit(item.id)
            setEditValue(item.value)}}>Edit</button>
            </>}
            <button style={{marginLeft:10}}type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
            </>)}
        </ul>
        </>
    );
}
 
export default Todo;