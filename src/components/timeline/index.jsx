import "./index.css";
import "./photos.css";
import PhotosData from "./../../data/index.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Timeline() {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     // animation
  //     // may be slow
  //     /*
  //     let woffx = (window.innerWidth / 5) * 3;

  //     let els = document.querySelectorAll(".anim");
  //     els.forEach((el, i) => {
  //       let BCR = el.getBoundingClientRect();
  //       let left = BCR.left - woffx;

  //       if (left < 0) el.classList.add("active");
  //       else el.classList.remove("active");
  //     });
  //     */
  //   });
  // }, []);

  return (
    <section id="timeline">
      <p className="message">
        For a better viewing experience, please view the gallery on your browser
        and in full screen. <br /> <br />
        You may click each photo to view more details.
      </p>

      <h1 className="year _2022">2022</h1>

      <h1 className="year _2023">2023</h1>

      {Object.keys(PhotosData).map((slug) => {
        const dimension = PhotosData[slug].dimension.split(" ");
        return (
          <Link
            to={`/photo/${slug}`}
            key={slug}
            className={`anim active ${slug} photo`}
            data-title={PhotosData[slug].title}
            style={{ aspectRatio: dimension[0] / dimension[2] }}
          >
            <img
              src={PhotosData[slug].img}
              alt={PhotosData[slug].caption}
              style={{
                objectPosition: PhotosData[slug].position,
              }}
            />
          </Link>
        );
      })}
    </section>
  );
}

export default Timeline;
