import "./index.css";

import logo from "./../../images/logo/white.svg";
import title from "./../../images/yeg-center.svg";

function Landing() {
  return (
    <section id="landing">
      <img className="logo" src={logo} alt="" />

      <img className="title" src={title} alt="Year-End Gallery" />

      <p className="credits">
        Photos by <strong>Miguel Abad</strong>, <strong>Stella Arenas</strong>,{" "}
        <strong>Jhanine Caoile</strong>, <strong>Karl Dimaculangan</strong>,{" "}
        <strong>Elly Kim</strong>, <strong>Soleil Nicolette</strong>,{" "}
        <strong>Mikyla Reyes</strong>, <strong>Patrick Reyes-Santos</strong>,{" "}
        <strong>Jillian C. Santos</strong>, <strong>Paulina Singh</strong>,{" "}
        <strong>Daryl D. Sy</strong>, <strong>France Vicente</strong>, and{" "}
        <strong>Vionna Villalon</strong>
        <br />
        <br />
        Designed by <strong>Emman Evangelista</strong> and{" "}
        <strong>Josh de Vera</strong>
        <br />
        Developed by <strong>Waleed Lugod</strong> and{" "}
        <strong>Emman Evangelista</strong>
      </p>
    </section>
  );
}

export default Landing;
