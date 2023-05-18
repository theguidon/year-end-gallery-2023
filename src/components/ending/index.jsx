import "./index.css";

import logo from "./../../images/logo/white.svg";
import title from "./../../images/yeg-right.svg";

function Ending() {
  return (
    <section id="ending">
      <img className="logo" src={logo} alt="" />

      <div
        className="title"
        style={{
          backgroundImage: `url(${title})`,
        }}
      />

      <p className="credits">
        Photos by <strong className="nowrap">Miguel Abad</strong>,{" "}
        <strong className="nowrap">Stella Arenas</strong>,{" "}
        <strong className="nowrap">Jhanine Caoile</strong>,{" "}
        <strong className="nowrap">Karl Dimaculangan</strong>,{" "}
        <strong className="nowrap">Elly Kim</strong>,{" "}
        <strong className="nowrap">Soleil Nicolette</strong>,{" "}
        <strong className="nowrap">Mikyla Reyes</strong>,{" "}
        <strong className="nowrap">Patrick Reyes-Santos</strong>,{" "}
        <strong className="nowrap">Jillian C. Santos</strong>,{" "}
        <strong className="nowrap">Paulina Singh</strong>,{" "}
        <strong className="nowrap">Daryl D. Sy</strong>,{" "}
        <strong className="nowrap">France Vicente</strong>, and{" "}
        <strong className="nowrap">Vionna Villalon</strong>
        <br />
        <br />
        Interactive by <strong className="nowrap">
          Emman Evangelista
        </strong> and <strong className="nowrap">Waleed Lugod</strong>
      </p>
    </section>
  );
}

export default Ending;
