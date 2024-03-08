import React, { useState } from 'react'
import "./Infinite.css"
import useTree from './useTree'


function Folder(props) {
  const [changeText , setChangeText] = useState(props.data?.text)
  const [showInput , setShowInput] = useState(false)
  const [inputText , setInputText] = useState("")

  const {insertNode , deleteNode , editNode} = useTree()


  const handleChangeText = (e) => {
   setChangeText(e.target.value)
   }

   const handleReplyComment =() => {
        setShowInput(true)
   }

   const handleEdit =() => {
    const data = props.allData?.map(e=> {
        return editNode(e , props.data?.id ,changeText)
      })
    props.handleSave(data)
   }

   const handleDelete =() => {
  
    const data = props.allData?.map(e=> {
        return deleteNode(e , props.data?.id )
      })
    props.handleSave(data)
  
   }

   const handleStoreInput = (e) => {
    setInputText(e.target.value)
   }

   const handleReplySave =() => {
      const data = props.allData?.map(e=> {
        return insertNode(e , props.data?.id ,inputText)
      })
    props.handleSave(data)
    setShowInput(false)
      
}



  return (
   <>
    <div className='folderWrapper' >
       <input className="inputBox" value ={changeText}  onChange ={ handleChangeText}/>
       <div>
       <span onClick={handleReplyComment}>Reply</span>
       <span onClick={handleEdit}>Edit </span>
       <span onClick={handleDelete} >Delete</span>
       </div>
    </div>
     {
        showInput ? <div>
         <input onChange={handleStoreInput}/>
         <span onClick={handleReplySave}>Save</span>
           <span onClick={() => setShowInput(false)} >Cancel</span> 
        </div>: null
    }
    {
        props.data?.items?.length ? 
         props.data?.items?.map(e => {
             return(
                 <div style={{paddingLeft : "20px"}}> <Folder allData={props.allData} data = {e} handleSave= {props.handleSave}/></div>
              )
          })

         : null
    }
    </>
  )
}

export default Folder