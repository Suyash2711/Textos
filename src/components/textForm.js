import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState(''); 

    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Lower Case was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handlealtClick = ()=>{
        // console.log("Alternate Case was Clicked");
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
          }
        let newText = chars.join("");
        setText(newText);
        props.showAlert("Converted to Alternating Case", "success");
    }
    const handleclearClick = ()=>{
        // console.log("Lower Case was Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
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

    const handleExtraSpaces = ()=>{ //used regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    // text = "New Text"; //Wrong way to change the state
    // setText("New Text"); //Correct way to change the state
    return (
        <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        {/* <label for="mybox" className="form-label">{props.heading}</label> */}
        <h1>{props.heading}</h1>
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'#D1D3E3'}} id="mybox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlealtClick}>AlTeRnAtInG cAsE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleinverseClick}>iNvErSe CaSe</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <b><p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p></b>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
    </div>
    </>
  )
}
