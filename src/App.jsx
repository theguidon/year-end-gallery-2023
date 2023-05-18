import { Route, Routes, Outlet } from "react-router";
import PhotoFocus from "./components/photo-focus";
import Landing from "./components/landing";
import Timeline from "./components/timeline";
import Strokes from "./components/strokes";
import Ending from "./components/ending";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let main = document.getElementById("main");

      /*
      // automatic horizontal scrolling
      let bodyBCR = document.body.getBoundingClientRect();
      let mainBCR = main.getBoundingClientRect();

      let val =
        ((main.scrollWidth - window.innerWidth) /
          (bodyBCR.height - mainBCR.height)) *
        -1 *
        bodyBCR.top;

      main.scrollLeft = val;
      */

      // // background color changing
      // let perc = window.scrollX / (main.clientWidth - window.innerWidth);

      // if (perc < 0.04) {
      //   setBgColor(main, "bg-dark");
      // } else if (perc < 0.13) {
      //   setBgColor(main, "bg-linen");
      // } else if (perc < 0.235) {
      //   setBgColor(main, "bg-black");
      // } else if (perc < 0.53) {
      //   setBgColor(main, "bg-linen");
      // } else if (perc < 0.675) {
      //   setBgColor(main, "bg-dark");
      // } else if (perc < 0.875) {
      //   setBgColor(main, "bg-linen");
      // } else {
      //   setBgColor(main, "bg-dark");
      // }

      // background color changing
      let tl = document.getElementById("timeline");
      let tlBCR = tl.getBoundingClientRect();
      let woffx = window.innerWidth / 2;
      let tlL = tlBCR.left - woffx;
      let tlR = tlBCR.right - woffx;
      let tlPerc = tlL / (tlL - tlR);

      if (tlPerc < 0) {
        setBgColor(main, "bg-dark");
      } else if (tlPerc < 0.106) {
        setBgColor(main, "bg-light");
      } else if (tlPerc < 0.215) {
        setBgColor(main, "bg-black");
      } else if (tlPerc < 0.521) {
        setBgColor(main, "bg-light");
      } else if (tlPerc < 0.68) {
        setBgColor(main, "bg-dark");
      } else if (tlPerc < 0.86) {
        setBgColor(main, "bg-light");
      } else {
        setBgColor(main, "bg-dark");
      }
    });
  }, []);

  const setBgColor = (el, color) => {
    if (el.classList.contains(color)) return;
    el.classList.remove("bg-dark", "bg-black", "bg-light");
    el.classList.add(color);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="/photo/:slug" element={<PhotoFocus />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <main id="main" className="bg-dark">
        <Landing />
        <div id="timeline-container">
          <Strokes />
          <Timeline />
        </div>
        <Ending />
      </main>
      <Outlet />
    </>
  );
}

export default App;
