import "./index.css";

import MajorStroke from "./../strokes/major";
import MinorStrokeA from "./../strokes/minor-a";
import MinorStrokeB from "./../strokes/minor-b";
import MinorStrokeC from "./../strokes/minor-c";
import { useEffect } from "react";

function Strokes() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
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
    });
  }, []);

  return (
    <div id="strokes">
      <MajorStroke />
      <MinorStrokeA />
      <MinorStrokeB />
      <MinorStrokeC />
    </div>
  );
}

export default Strokes;
