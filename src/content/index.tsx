import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const app = document.createElement("div");
app.id = "open-fing-plus";

const openFingRoot = document.getElementById("root");
if (openFingRoot) {
  openFingRoot.prepend(app);
}

ReactDOM.render(<App />, document.getElementById("open-fing-plus"));
