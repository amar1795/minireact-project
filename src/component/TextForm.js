import React ,{useState} from 'react'


export default function TextForm(props) {
    const [BtnText, setBtnText] = useState("fa-solid fa-moon fa-2xl");

    const [MyStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    });

    const toggleClick=()=>{
        if (MyStyle.color==="black") {

            setMyStyle({
                color:"white",
            backgroundColor:"black"

            })

            setBtnText("fa-regular fa-moon fa-2xl")
            
        }
        else
        {
            setMyStyle({
                color:"black",
            backgroundColor:"white"

            })

            setBtnText("fa-solid fa-moon fa-2xl")
            
        }

    }


    const handleUpClick =()=>
    {

        let newText=text.toUpperCase();
        setText(newText);
    
    }
    const handleLoClick =()=>
        {

            
            setText(text.toLowerCase());
        
        }

    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }

    const handleClearText=()=>{
        setText("");
    }

    const [text, setText] = useState("Enter the text here");
    //use state is a Hook which changes the state of ""
    return (
    
        <div className='container'> 
        <div>
        <div className="mb-3">

        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={MyStyle} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
        
        <i className={BtnText} onClick={toggleClick} style={{cursor:"pointer"}} ></i>
        
            
        
        </div>

        <div className="mb-3">
            <h1>your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </div>

  )
}

