import React, { useState } from 'react'
import Folder from './Folder'
import useTree from './useTree'


function Infinite() {
  const [data , setData] = useState([
    {
      id : 1,
      text : "hello",
      items : []

    }
  ])
  const [value , setValue] = useState("")
  const {insertNode , deleteNode , editNode} = useTree()

  const handleInputChange =(e) => {
    setValue(e?.target?.value)
  }
  const handleAdd = () => {
    
    setData(prev => [...prev , {
      id :  new Date().getTime(),
      text : value,
      items : []
    }])
    setValue("")
  
  }
  const handleAddData =(data) => {
    console.log("dfff" , data)
    setData(data)
  }

  console.log("val" , data )
  return (
    <div className='infiniteWrapper'>
      <h1>hello </h1>
      <input className='inputeMain' onChange={handleInputChange} value={value}/> 
      <button className='btn' onClick={handleAdd}> Add</button>
      <div>
        {
          data?.map((e, i) => {
            return(
              <div key={i}> <Folder allData ={data} data ={e} handleSave= {handleAddData} /> </div>
            )
          })
        }
      </div>
    
    </div>
  )
}

export default Infinite