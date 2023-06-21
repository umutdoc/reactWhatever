import React from "react";
import "./Buttons.css";

export default function Buttons() {
  const [banana, setBanana] = React.useState(132);
  const [singer, setSinger] = React.useState(
    "https://www.youtube.com/embed/jNQXAC9IVRw"
    //https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
  );
  const [unlocked, setUnlocked] = React.useState(false);
  const [btnSmash, setBtnSmash] = React.useState(0);
  const [lolOne, setlolOne] = React.useState(0);

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
    console.log("unlocked: " + unlocked + "lolOne: " + lolOne);
    setBanana(132);
    if (unlocked === true && lolOne === 0) {
      setlolOne(1);
    }
    setUnlocked(false);
    setBtnSmash(0);
    console.log("unlocked: " + unlocked + "lolOne: " + lolOne);
  }
  function smash() {
    console.log("unlocked: " + unlocked + "lolOne: " + lolOne);
    if (btnSmash < 60) {
      setBtnSmash(btnSmash + 1);
    } else {
      setUnlocked(true);
      if (lolOne === 1) {
        setlolOne(2);
      }
    }
    console.log("unlocked: " + unlocked + "lolOne: " + lolOne);
  }

  return (
    <>
      <div className="container">
        <div id="container-scroll-up">
          <div id="scroll-text-up"> TEST TEST TEST TEST</div>
        </div>
        <div className="oppa-div oppaStack">
          <button onClick={newSong}>▶️</button>
          <iframe
            id="singerFrame"
            width="100"
            height="100"
            src={singer}
          ></iframe>
          <img src="src\assets\eyeLeft.jpg" alt="eyeLeft" width={200} />
          <img src="src\assets\mouth.jpg" alt="mouth" width={200} />
          <img src="src\assets\eyeRight.jpg" alt="eyeRight" width={200} />
          <textarea
            name="singer"
            id="thesinger"
            cols="5"
            rows="5"
            ref={urlHere}
            width={50}
            height={37}
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
        <div className="unlock-div">
          <div className="unlock-text">
            <span>hit the button 60 times to unlock the picture</span>
            <p> {60 - btnSmash}</p>
            <button onClick={unlocked === false && smash} disabled={unlocked}>
              SMASH!!!
            </button>
          </div>

          {lolOne === 1 ? (
            unlocked ? (
              <img
                src="src\assets\banana.jpg"
                alt="banana"
                style={unlocked ? {} : { filter: "blur(1.5rem)" }}
                width={200}
              />
            ) : (
              <img
                src="src\assets\mouth.jpg"
                alt="mouth"
                style={unlocked ? {} : { filter: "blur(1.5rem)" }}
                width={200}
              />
            )
          ) : (
            <img
              src="src\assets\banana.jpg"
              alt="banana"
              style={unlocked ? {} : { filter: "blur(1.5rem)" }}
              width={200}
            />
          )}
        </div>
      </div>
    </>
  );
}
