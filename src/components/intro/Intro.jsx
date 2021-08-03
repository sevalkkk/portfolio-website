import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import img2 from "./img/img2.jpg"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img2} alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Seval Karahan</h1>
          <h3>
            Computer Engineer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
        </a>
      </div>
    </div>
  );
}
