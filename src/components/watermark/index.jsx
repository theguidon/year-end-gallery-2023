import "./index.css";

import logo from "./../../images/watermark/logo.svg";
import text from "./../../images/watermark/text.svg";

function Watermark(props) {
  return (
    <div
      id="watermark"
      className={`${props.position} ${props.active ? "active" : ""}`}
    >
      <img src={logo} alt="" className="logo" />
      <img src={text} alt="" className="text" />
      <div className="line" />
      <p className="byline">{props.byline}</p>
    </div>
  );
}

export default Watermark;
