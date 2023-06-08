import React from "react";
import "./Buttons.css";

export default function Buttons() {
  const [banana, setBanana] = React.useState(132);
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
