import "./index.css";

import logo from "./../../images/logo/white.svg";
import bg from "./../../images/bg.png";

function Landing() {
  const onViewClick = () => {
    document.querySelector("#timeline .message").scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <section
      id="landing"
      className="noglitch"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <img className="logo" src={logo} alt="" />

      <h1 className="title">
        <span className="nowrap">Year-End</span> Gallery
      </h1>

      <p className="enter" onClick={onViewClick}>
        View the Gallery
      </p>
    </section>
  );
}

export default Landing;
