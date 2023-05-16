import { Navigate, useParams } from "react-router";
import parse from "html-react-parser";

import "./index.css";
import PhotoData from "../../data";
import Watermark from "../watermark";
import { useEffect, useRef, useState } from "react";

function PhotoFocus() {
  const params = useParams();
  const wrapper = useRef(null);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!wrapper.current) return;

    // fade in effect
    wrapper.current.classList.add("active");

    // remove scroll from body
    document.querySelector("body").classList.add("no-scroll");
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
    // todo
    // toggle overlay
  };

  const onMouseMove = (event) => {
    // todo
    // if cursor is in left half of screen
    //   toggle overlay
    // refresh timer
  };

  if (!PhotoData[params.slug] || shouldRedirect) return <Navigate to="/" />;

  return (
    <div
      id="photo-focus"
      ref={wrapper}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      <div className="content-wrapper">
        <p className="return" onClick={initiateExit}>
          Back to Gallery
        </p>

        <h1 className="title">{PhotoData[params.slug].title}</h1>

        <p className="caption">{parse(PhotoData[params.slug].caption)}</p>

        <p className="meta byline">
          Photo by <strong>{PhotoData[params.slug].byline}</strong>
        </p>
        <p className="meta timeloc">
          Taken {PhotoData[params.slug].date} at{" "}
          {PhotoData[params.slug].location}
        </p>
        <p className="meta technical">
          {PhotoData[params.slug].medium}, {PhotoData[params.slug].dimension}
        </p>
      </div>

      <Watermark
        byline={PhotoData[params.slug].byline}
        position={PhotoData[params.slug].watermark_position}
      />
    </div>
  );
}

export default PhotoFocus;
