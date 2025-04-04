import React, { useState } from 'react'

export default function TextForm(props) {
    const isDisabled = () => text.length === 0;
    const handleUpClick = () => {
        // console.log("Uppercase was clicked")  
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase.","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase.","success")
    }
    const handleCapitalizeWords = () => {
        let newText = text
            .split(' ')  // Split the text into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize the first letter and lowercase the rest
            .join(' ');  // Join the words back into a sentence
        setText(newText);
        props.showAlert("Text is Capitalized.","success")
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();  // Replaces multiple spaces with a single space and trims leading/trailing spaces
        setText(newText);
        props.showAlert("Extra space has been cleared.","success")
    }
    const handleExtractLinks = () => {
        const urlRegex = /https?:\/\/[^\s]+/g
        const extractedLinks = text.match(urlRegex) || []
        setLinks(extractedLinks)
        props.showAlert("All links are extracted.","success")
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard.","success")
    }
    const handleOnChange = (event) => {
        // console.log("On change") 
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    const [links, setLinks] = useState([]);
    return (
        <>
            <div className="container">
                <div>
                    <h3 className='mb-2' style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'lightgray', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                    </div>

                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleExtractLinks}>Extract Links</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleCapitalizeWords}>Capitalize Text</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleRemoveExtraSpaces}>Remove Extract Spaces</button>
                    <button className="btn btn-info mx-2 my-2" disabled={isDisabled()} onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview !"}</p>
                {links.length > 0 && (
                    <div>
                        <h3>Extracted Links:</h3>
                        <ul>
                            {links.map((links, index) => (
                                <li key={index}>
                                    <a href={links} target='blank'>{links}</a>
                                </li>))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
