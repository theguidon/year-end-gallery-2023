import { useEffect } from "react";

import PhotoData from "./data";

function App() {
  useEffect(() => {
    console.log(PhotoData);
  }, []);

  return (
    <div className="App">
      <h1>Year-End Gallery 2023</h1>
    </div>
  );
}

export default App;
