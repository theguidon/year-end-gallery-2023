import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./global.css";
import "./fonts.css";

import "./fonts/Adobe-Clean/AdobeCleanBold.otf";
import "./fonts/Adobe-Clean/AdobeCleanBoldIt.otf";
import "./fonts/Adobe-Clean/AdobeCleanIt.otf";
import "./fonts/Adobe-Clean/AdobeCleanLight.otf";
import "./fonts/Adobe-Clean/AdobeCleanLightIt.otf";
import "./fonts/Adobe-Clean/AdobeCleanRegular.otf";

import "./fonts/TRY-Vesterbro/TRYVesterbro-Bold.otf";
import "./fonts/TRY-Vesterbro/TRYVesterbro-Light.otf";
import "./fonts/TRY-Vesterbro/TRYVesterbro-Medium.otf";
import "./fonts/TRY-Vesterbro/TRYVesterbro-Regular.otf";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
