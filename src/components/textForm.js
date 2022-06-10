import React, {useState} from 'react'


export default function TextForm(props) {
    const[text, setText] = useState('Enter the text here'); 

    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        // console.log("Lower Case was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = ()=>{
        // console.log("Lower Case was Clicked");
        let newText = "";
        setText(newText);
    }
    const handleinverseClick = ()=>{
        // console.log("Lower Case was Clicked");
        var chars = text.toUpperCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toLowerCase();
          }
        let newText = chars.join("");
        setText(newText);
    }
    const handlealtClick = ()=>{
        // console.log("Alternate Case was Clicked");
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
          }
        let newText = chars.join("");
        setText(newText);
    }

    const handleExtraSpaces = ()=>{ //used regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    // text = "New Text"; //Wrong way to change the state
    // setText("New Text"); //Correct way to change the state
    return (
        <>
    <div className="container my-3">
        {/* <label for="mybox" className="form-label">{props.heading}</label> */}
        <h1>{props.heading}</h1>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handlealtClick}>AlTeRnAtInG cAsE</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleinverseClick}>iNvErSe CaSe</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <b><p>{0.008 * text.split(" ").length} Minutes Read</p></b>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
