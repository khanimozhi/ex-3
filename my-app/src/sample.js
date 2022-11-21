
import axios from 'axios'
import React,{useEffect,useState} from 'react'

const Sample=({value})=>{
  const [name,setName]=useState('')
  const [number,setNumber]=useState(0)
  useEffect(()=>{
    if(name.length){
    console.log('name rendered')}
  },[name])
  useEffect(()=>{
   if(number.length){
    console.log('number rendered')}
  },[number])

  const getData=()=>{
    axios
      .get("https://randomuser.me/api/")
      .then(function(response){
        console.log(response.data)
      })
  }
    return(
      <>
      <input placeholder="name"onChange={(e)=>setName(e.target.value)}/>
      <input placeholder="number"onChange={(e)=>setNumber(e.target.value)}/>
      <button style={{marginLeft:10}}type="button" onClick={()=>getData()}>Ok</button>
      {/*<h1>{value}</h1>*/}
      </>
    );
}

export default Sample