import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';

//*
import {toast } from 'react-toastify';
//*

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        console.log("UpperCase Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAleart("Clicked UpperCase !", "Danger");
    }

    const functionNwords = ()=>{
        if(text.length == 0){
            return 0;
        }

        let newText = text.trim().replace(/\s+/g, " ").replace(/\n/g," ");
        return newText.split(/\s/).length;
    }

    const handleOnChange = (event)=>{
        console.log("HandleOn Clicked ");
        setText(event.target.value);
    }

    const handleClearChange = (event)=>{
        console.log("HandleClear Clicked ");
        setText('');
        alert("Deleted all Contex !");
    }

    const handleEmailExtract = (event)=>{
        console.log("Extract Email Clicked ");
        let extractedEmails = text.match(/[a-zA-Z0-9.]+@gmail\.com/g) || [];
        setEmails(extractedEmails);
    }
    
    const alternateCase = () => {
        console.log("alt Clicked ");

        let newText = text
            .split("")
            .map((char) => {
                if (/[A-Z]/.test(char)) {
                    return char.toLowerCase();
                } else if (/[a-z]/.test(char)) {
                    return char.toUpperCase();
                } else {
                    return char; // keep spaces & symbols unchanged
                }
            })
            .join("");

        setText(newText);

        toast.error("You just Alter the case",{
            style: {
                fontSize: "18px",
                color: "#ffffff",
                backgroundColor: "#1e1e1e"
            }
        })
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        /*
        text.select()
        document.getSelection().removeAllRanges();
        */
    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });

        element.href = URL.createObjectURL(file);
        element.download = "myText.txt";

        document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
    }

    const [text, setText] = useState(''); //!  [ 'Hello', ƒ ]
    const [emails, setEmails] = useState([]);
    // text = "Don't add here"

    return (
    <>
        <h1 style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}>{props.heading}</h1>
        <div className="col-sm-10 p-flex p-2" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}>
            <label htmlFor="TextArea" className="col-sm-2 col-form-label">Text Area</label>
            <button onClick={handleCopy} style={{color:"red"}} disabled={text.length === 0}>COPY</button>
            <textarea className="form-control p-inline-flex p-2" id="myBox" onChange={handleOnChange}  value={text} rows="10" placeholder='Enter Text Here'  style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}/>
        </div>

        <button className="btn btn-primary my-1" onClick={handleUpperClick} disabled={text.length === 0}>UPPER_CASE</button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleClearChange} disabled={text.length === 0}>Clear</button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleEmailExtract} disabled={text.length === 0}>Extract_Emails</button>

        <button className="btn btn-danger my-1 mx-1" onClick={alternateCase} disabled={text.length === 0}>Alternate</button>
        <button className="btn btn-danger my-1 mx-1" onClick={handleDownload}  disabled={text.length === 0}>dow</button>

        {/* Button for Add div*/}
        <div>
            {emails.length > 0 && emails.map((email, index) => (
                <p key={index}>{index}-{email}</p>
            ))}
        </div>

        <div className="col-sm-10 my-3" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}>
            <label htmlFor="textSummary" className="col-sm-2 col-form-label"><strong>Text Summary</strong></label>
            <div className="col-sm-10 my-3"> No of Char : {text.length} | No of Words : {functionNwords()}</div>
        </div>
        
        <div className="col-sm-10 my-3" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}>
            <label htmlFor="textPreview" className="col-sm-2 col-form-label"><strong>Text Preview</strong></label>
            <p>{text.length > 0 ? text : "Nothing to shoq"}</p>
        </div>
    </>
  )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading: "Text Area (default_prop)",
}
