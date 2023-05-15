import { useParams } from "react-router";

import "./index.css";
import PhotoData from "../../data";

function PhotoFocus() {
  const params = useParams();

  if (!PhotoData[params.slug]) return <></>;

  return <h1>{params.slug}</h1>;
}

export default PhotoFocus;
