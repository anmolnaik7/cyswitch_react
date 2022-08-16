import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";


const loadingMarkup = (
  <div className="py-4 text-center">
    <h3> Loading.. </h3>
  </div>
);
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root"),
);

reportWebVitals();
