import "./index.css";
import PhotosData from "./../../data/index.jsx";

function Timeline() {
  return (
    <section id="timeline">
      <p className="message">For a better viewing experience, please view the gallery in full screen.</p>

      <h1 className="year 2022">2022</h1>

      <h1 className="year 2023">2023</h1>

      {Object.keys(PhotosData).map((slug) => {
        const dimensions = PhotosData[slug].dimension.split(" ");
        return (
          <img
            className={`anim${slug}`}
            key={slug}
            src={PhotosData[slug].img}
            alt=""
            style={{ aspectRatio: dimensions[0] / dimensions[2] }}
          />
        );
      })}
    </section>
  );
}

export default Timeline;
