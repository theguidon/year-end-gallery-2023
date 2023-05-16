import "./index.css";

import logo from "./../../images/logo/white.svg";
import title from "./../../images/yeg-center.svg";

function Landing() {
  return (
    <section id="landing">
      <img className="logo" src={logo} alt="" />

      <img className="title" src={title} alt="Year-End Gallery" />

      <p className="credits">
        Designed by <strong>Emman Evangelista</strong> and{" "}
        <strong>Josh de Vera</strong>
        <br />
        Developed by <strong>Waleed D. Lugod</strong> and{" "}
        <strong>Emman Evangelista</strong>
      </p>
    </section>
  );
}

export default Landing;
