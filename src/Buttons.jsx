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
  let setsVar = 0;
  const setS = [
    "Veni, vidi, vici.",
    "Alea iacta est.",
    "Carpe diem.",
    "Cogito, ergo sum.",
    "In vino veritas.",
    "Acta, non verba.",
    "Carthago delenda est.",
  ];

  function incrementS() {
    if (setsVar < 6) {
      setsVar++;
    } else {
      setsVar = 0;
    }

    //increase by 1
    document.getElementById("scroll-text-up").innerHTML = setS[setsVar]; //set span value
  }
  setInterval(incrementS, 13000); //1000ms in 1 sec
  let setAVar = 0;
  const setA = ["#singer-div", "#resizebanana-div", "#hiddenbanana-div"];
  function incrementA() {
    if (setAVar < 2) {
      setAVar++;
    } else {
      setAVar = 0;
    }

    function setQuickscrollText() {
      switch (setA[setAVar]) {
        case "#singer-div":
          return "The Singer";
        case "#resizebanana-div":
          return "Resize the Banana";
        case "#hiddenbanana-div":
          return "The Hidden Banana";

        default:
          return "😙";
      }
    }
    //increase by 1
    document.getElementById("anchor-a").innerHTML = setQuickscrollText(); //set span value
  }
  setInterval(incrementA, 6000); //1000ms in 1 sec

  return (
    <>
      <div className="container">
        <div id="container-scroll-up">
          <div id="scroll-text-up">{setS[setsVar]}</div>
        </div>
        <div id="container-scroll-a">
          <div id="scroll-text-a">
            <a id="anchor-a" href="#resizebanana-div">
              QUICK SCROLL
            </a>
          </div>
        </div>
        <div className="oppa-div oppaStack main-div" id="singer-div">
          <button onClick={newSong}>▶️</button>
          <iframe
            id="singerFrame"
            width="100"
            height="100"
            src={singer}
          ></iframe>
          <img src="assets/eyeLeft.jpg" alt="eyeLeft" width={200} />
          <img src="assets/mouth.jpg" alt="mouth" width={200} />
          <img src="assets/eyeRight.jpg" alt="eyeRight" width={200} />
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
        <div className="banana-div main-div" id="resizebanana-div">
          <p>Use these buttons to set the banana size (very important)</p>
          <img
            className="banana-img"
            src="assets/banana.jpg"
            width={banana}
            height={banana}
            alt=""
          />
          <button onClick={bananaShrink}>Shrink</button>
          <button onClick={bananaGrow}>Grow</button>
          <button onClick={bananaReset}>RESET!!!</button>
        </div>
        <div className="unlock-div main-div" id="hiddenbanana-div">
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
                src="assets/banana.jpg"
                alt="banana"
                style={unlocked ? {} : { filter: "blur(1.5rem)" }}
                width={200}
              />
            ) : (
              <img
                src="assets/mouth.jpg"
                alt="mouth"
                style={unlocked ? {} : { filter: "blur(1.5rem)" }}
                width={200}
              />
            )
          ) : (
            <img
              src="assets/banana.jpg"
              alt="banana"
              style={unlocked ? {} : { filter: "blur(1.5rem)" }}
              width={200}
            />
          )}
        </div>
        <div className="cube-container main-div">
          <div className="cube1">1</div>
          <div className="cube2">2</div>
          <div className="cube3">3</div>
          <div className="cube4">4</div>
        </div>
        <button className="secretButton">SECRET FOUND!!</button>
      </div>
    </>
  );
}
