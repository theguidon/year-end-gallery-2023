import { Navigate, useParams } from "react-router";
import parse from "html-react-parser";

import "./index.css";
import PhotoData from "../../data";
import Watermark from "../watermark";
import { useEffect, useRef, useState } from "react";

function PhotoFocus() {
  const params = useParams();
  const wrapper = useRef(null);
  const img = useRef(null);

  const [overrideOverlay, setOverrideOverlay] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!wrapper.current) return;

    // fade in effect
    setTimeout(() => {
      wrapper.current.classList.add("active");
    }, 100);

    // remove scroll from body
    document.querySelector("body").classList.add("no-scroll");

    // automatically remove overlay after delay
    setTimeout(() => {
      setOverrideOverlay(false);
    }, 3000);
  }, []);

  const initiateExit = () => {
    if (!wrapper.current) return;

    // fade out effect
    wrapper.current.classList.remove("active");

    // add scroll to body
    document.querySelector("body").classList.remove("no-scroll");

    setTimeout(() => {
      setShouldRedirect(true);
    }, 500);
  };

  const onClick = (event) => {
    setOverlayVisible(!overlayVisible);
    if (overrideOverlay) setOverrideOverlay(false);
  };

  const onMouseMove = (event) => {
    if (
      window.innerWidth <= 576 ||
      !wrapper.current.classList.contains("active")
    )
      return;

    let mx = event.clientX;
    let my = event.clientY;

    if (mx < window.innerWidth / 3) {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }

    // moving image
    let tx = (mx / window.innerWidth - 0.5) * -30;
    let ty = (my / window.innerHeight - 0.5) * -15;

    img.current.style.transform = `scale(1.15) translate(${tx}px, ${ty}px)`;
  };

  if (!PhotoData[params.slug] || shouldRedirect) return <Navigate to="/" />;

  return (
    <div
      id="photo-focus"
      ref={wrapper}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      <img
        className="img"
        src={PhotoData[params.slug].img}
        alt={`${PhotoData[params.slug].title} by ${
          PhotoData[params.slug].byline
        }`}
        ref={img}
      />

      <div
        className={`tint ${overrideOverlay || overlayVisible ? "active" : ""}`}
      />

      <p
        className={`return ${
          overrideOverlay || overlayVisible ? "active" : ""
        }`}
        onClick={initiateExit}
      >
        Back to Gallery
      </p>

      <div
        className={`content-wrapper ${
          overrideOverlay || overlayVisible ? "active" : ""
        }`}
      >
        <h1 className="title">{PhotoData[params.slug].title}</h1>

        <p className="caption">{parse(PhotoData[params.slug].caption)}</p>

        <p className="meta byline">
          Photo by <strong>{PhotoData[params.slug].byline}</strong>
        </p>

        <p className="meta timeloc">
          Taken {PhotoData[params.slug].date} at the{" "}
          {PhotoData[params.slug].location}
        </p>

        <p className="meta technical">
          {PhotoData[params.slug].medium}, {PhotoData[params.slug].dimension}
        </p>
      </div>

      <Watermark
        byline={PhotoData[params.slug].byline}
        position={PhotoData[params.slug].watermark_position}
        active={!overlayVisible}
      />
    </div>
  );
}

export default PhotoFocus;
