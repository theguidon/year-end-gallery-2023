import "./index.css";
import "./photos.css";
import PhotosData from "./../../data/index.jsx";

function Timeline() {
  return (
    <section id="timeline">
      <p className="message">For a better viewing experience, please view the gallery in full screen.</p>

      <h1 className="year _2022">2022</h1>

      <h1 className="year _2023">2023</h1>

      {Object.keys(PhotosData).map((slug) => {
        const dimension = PhotosData[slug].dimension.split(" ");
        return (
          <div
            key={slug}
            className={`anim-${slug} photo`}
            data-title={PhotosData[slug].title}
            style={{ aspectRatio: dimension[0] / dimension[2] }}
          >
            <img src={PhotosData[slug].img} alt={PhotosData[slug].caption} />
          </div>
        );
      })}
    </section>
  );
}

export default Timeline;
