import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text,setText]=useState("Write something 'KrishChalla...' ")
 // const [trick,settrick]=useState('')


  const handleClick=()=>{
      setText(text.toUpperCase())
      props.alertf('UpperCase')
      
      //settrick('upperCase')
      //showAlert(text,'success')
  }

  const handleChange=(event)=>{
    
    setText(event.target.value)
    console.log('change',text,text.split(" "))
    
    
  }
   const handleClickLo=()=>{
    setText(text.toLowerCase())
   }

   const handleClearClick=()=>{
    setText('')
   }
   console.log(text.split(' '))
 
  return (

    <>
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <div className="mb-3">
        <textarea onChange={handleChange}
          className="form-control" value={text}
          id="exampleFormControlTextarea1"
          rows="8"> 
        </textarea>
        </div>

          {/* <textarea 
          className="form-control" value={text}
          id="exampleFormControlTextarea1"
          rows="8"> 
          </textarea> */}
          
          <div className="d-flex justify-content-between">
          <button type="button mx-2" className="btn btn-primary " onClick={handleClick}>To uppercase</button>
          <button type="button mx-2" className="btn btn-primary " onClick={handleClearClick}>Clear</button>
          <button type="button mx-2" className="btn btn-primary " onClick={handleClickLo}>To lowercase</button>
          </div>


      </div>

      <div className="container my-2">
          <h1>Text Summary</h1>
          <p>{text.split(" ").filter(str => str !== "").length} words and {text.length} characters</p>
          
          <p>{text.split(" ").length/125} Minutes to read</p>
          <h3>preview</h3>
          <p>{text}</p>
      </div>

    </>

  );
}
