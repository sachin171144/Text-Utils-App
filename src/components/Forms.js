import React, { useState } from "react";

export default function Forms(props) {
  const handleUpClick = (e) => {
    e.preventDefault();
    // console.log("Clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UpperCase","success");
  };

  const handleLoClick = (e) => {
    e.preventDefault();
    // console.log("Clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase","success");
  };

  const clearText = (e) => {
    e.preventDefault();
    // console.log("Clicked")
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  };

  const handleSpace = (e) => {
    e.preventDefault();
    var sp = text.replace(/\s+/g, " ").trim();
    setText(sp);
    props.showAlert("Extra spaces cleared","success");
  };

  const changeOn = (event) => {
    // console.log("onload");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h2 className="my-4">{props.heading}</h2>
        <form>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={changeOn}
            name="text"
            id="text"
            rows="10"
            placeholder = "Write Here"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
            Clear
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>
            Remove extra space
          </button>
        </form>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters{" "}
        </p>
        <p>It will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
