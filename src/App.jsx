import { Route, Routes, Outlet } from "react-router";
import PhotoFocus from "./components/photo-focus";
import Landing from "./components/landing";
import Timeline from "./components/timeline";
import Ending from "./components/ending";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let main = document.getElementById("main");

      let bodyBCR = document.body.getBoundingClientRect();
      let mainBCR = main.getBoundingClientRect();

      let val =
        ((main.scrollWidth - window.innerWidth) /
          (bodyBCR.height - mainBCR.height)) *
        -1 *
        bodyBCR.top;

      main.scrollLeft = val;
    });
  }, []);

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
      <main id="main">
        <Landing />
        <Timeline />
        <Ending />
      </main>
      <Outlet />
    </>
  );
}

export default App;
