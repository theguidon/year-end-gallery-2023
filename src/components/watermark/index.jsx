import "./index.css";

function Watermark(props) {
  return (
    <div id="watermark" className={props.position}>
      <h1>Watermark {props.byline}</h1>
    </div>
  );
}

export default Watermark;
