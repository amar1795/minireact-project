import React ,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>
    {

        let newText=text.toUpperCase();
        setText(newText);
    
    }
    const handleLoClick =()=>
        {

            let newText=text.toLowerCase();
            setText(newText);
        
        }

    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
    return (
        <>
        <div>
        <div className="mb-3">

        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="mb-3">
            <h1>your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>

  )
}

