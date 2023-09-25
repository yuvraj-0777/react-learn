import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        //console.log("Upper case was clicked");
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        
    </>
  )
}
