import React, {useState} from 'react'


export default function TextForm(props) {
    const[text, setText] = useState('Enter the text here'); 

    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    // text = "New Text"; //Wrong way to change the state
    // setText("New Text"); //Correct way to change the state
    return (
    <div className="mb-3">
        {/* <label for="mybox" className="form-label">{props.heading}</label> */}
        <h1>{props.heading}</h1>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
