import React, {useState} from "react";

export default function TextForm (props) {

    const [text, setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const converUpText = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")
    }
    const converlowText = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success")
    }
    const copyText = ()=>{
        var inputArea = document.getElementById('exampleFormControlTextarea1');
        inputArea.select();
        navigator.clipboard.writeText(inputArea.value);
        props.showAlert("Copy to Clipboard", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/ [ ] + /);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success")
    }
    const clearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text", "success")
    }

    return (
        <>
        <div className="container my-4">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Enter the Text Below</h1>
            <div className="mb-3">
            </div>
            <div className="mb-3">
                <textarea value={text} className="form-control shadow-lg p-3 mb-5 rounded " id="exampleFormControlTextarea1" rows="6" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#2b2f40' }} placeholder = "Enter the Text"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={converUpText}>Convert Into UpperCase</button>
            <button className="btn btn-success mx-2" onClick={converlowText}>Convert Into LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>

        <div className="container p-3">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
        <span className={`text-${props.mode==='light'?'dark':'light'}`}>Word:</span><b className="text-success"> {text.split(" ").length} </b>
            <span className={`text-${props.mode==='light'?'dark':'light'} mx-2`}>Characters:</span><b className="text-success">{text.length}</b>
            <p className={`text-${props.mode==='light'?'dark':'light'} my-2`}> <b className="text-success">{0.008 * text.split(" ").length}</b>  Minutes to read</p>
        <h2 className={`text-${props.mode==='light'?'dark':'light'} my-2`}>Preview</h2>
            <p className={`pt-3 text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    );
}
