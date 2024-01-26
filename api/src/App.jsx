import { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data , setdata] = useState([])

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",
      { 
        headers: { 'Authorization': 'whatever-you-want' }
      })
      .then((res) =>{
        setdata(res.data.books);
      })
      .catch(error =>{
        console.log("Status Code : " , error.response.status)
        console.log("Website not found")
      })
      
  } , [])

   
  
  return (
    <>
    {data.map((ele , i)=>{
    return (
      <div className='card' key={i}>
        <h2 className='title'>{ele.title}</h2>
        <div className='details flex'>
          <img src={ele.imageLinks.smallThumbnail} className='img'/>
          <p>{ele.description}</p>
        </div>
        <p className='author'>{ele.authors[0]}</p>
      </div>
    )
    })}
    
    </>
  )
}

export default App
