import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
        toast.success("Converted to Uppercase");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
        toast.success("Converted to Lowercase");
    }

    const handleClearClick = () => {
        if (window.confirm("Are you sure you want to clear the text?")) {
            let newText = '';
            setText(newText);
            props.showAlert("Text Cleared!", "success");
            toast.warning("Text Cleared");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
        toast.info("Copied to Clipboard");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
        toast.success("Extra spaces removed");
    }

    const handleEmailExtract = () => {
        let extractedEmails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
        setEmails(extractedEmails);
        if (extractedEmails.length > 0) {
            toast.success(`${extractedEmails.length} emails extracted`);
        } else {
            toast.info("No emails found");
        }
    }

    const [text, setText] = useState('');
    const [emails, setEmails] = useState([]);

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleEmailExtract}>Extract Emails</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                {emails.length > 0 && (
                    <div className="mt-3">
                        <h3>Extracted Emails</h3>
                        <ul className="list-group">
                            {emails.map((email, index) => (
                                <li key={index} className="list-group-item" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>{email}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
