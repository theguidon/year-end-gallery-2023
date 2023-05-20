import "./index.css";

import MajorStroke from "./../strokes/major";
import MinorStrokeA from "./../strokes/minor-a";
import MinorStrokeB from "./../strokes/minor-b";
import MinorStrokeC from "./../strokes/minor-c";
import { useEffect } from "react";

function Strokes() {
  const updateStrokes = () => {
    let woffx = (window.innerWidth / 4) * 3;

    let paths = document.querySelectorAll("#strokes .stroke path");
    paths.forEach((path, index) => {
      let pathLen = path.getTotalLength();
      let pathBCR = path.getBoundingClientRect();
      let pathL = pathBCR.left - woffx;
      let pathR = pathBCR.right - woffx;
      let pathPerc = (pathL / (pathR - pathL)) * -1;

      path.style.strokeDasharray = `${pathLen} ${pathLen}`;
      path.style.strokeDashoffset = pathLen - pathPerc * pathLen;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateStrokes);

    // let intId = setInterval(updateStrokes, 25);

    // return () => clearInterval(intId);
  }, []);

  return (
    <div id="strokes" className="noglitch">
      <MajorStroke />
      <MinorStrokeA />
      <MinorStrokeB />
      <MinorStrokeC />
    </div>
  );
}

export default Strokes;
