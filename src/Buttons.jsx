import React from "react";
import "./Buttons.css";

export default function Buttons() {
  const [banana, setBanana] = React.useState(132);
  const [singer, setSinger] = React.useState(
    "https://www.youtube.com/embed/jNQXAC9IVRw"
    //https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
  );
  const urlHere = React.useRef();
  function newSong() {
    let raw = urlHere.current.value;
    let encode = raw.indexOf("watch?v=");
    let end = raw.indexOf("&");
    encode = encode + 8;
    let result = raw.substring(encode, end);
    setSinger(`https://www.youtube.com/embed/${result}`);
    console.log(result);
  }

  function bananaShrink() {
    let b = banana;
    let p = b;
    if (b > 100) {
      let p = b - 99;
      setBanana(p);
    }

    console.log("hi" + p);
  }
  function bananaGrow() {
    let b = banana;
    let p = b;
    if (b < 500) {
      let p = b + 99;
      setBanana(p);
    }

    console.log("HI" + p);
  }
  function bananaReset() {
    setBanana(132);
  }
  return (
    <>
      <div className="container">
        <div className="oppa-div">
          <button onClick={newSong}>AA</button>
          <iframe width="420" height="315" src={singer}></iframe>
          <textarea
            name="singer"
            id="thesinger"
            cols="1"
            rows="1"
            ref={urlHere}
          ></textarea>
        </div>
        <div className="banana-div">
          <p>Use these buttons to set the banana size (very important)</p>
          <img
            className="banana-img"
            src="src\assets\banana.jpg"
            width={banana}
            height={banana}
            alt=""
          />
          <button onClick={bananaShrink}>Shrink</button>
          <button onClick={bananaGrow}>Grow</button>
          <button onClick={bananaReset}>RESET!!!</button>
        </div>
      </div>
    </>
  );
}
