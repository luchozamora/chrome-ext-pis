import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import ContentButton from "./components/ContentButton";
import ContentDrawer from "./components/ContentDrawer";

const extButton = document.createElement("div");
extButton.id = "open-fing-plus-button";

const extDrawer = document.createElement("div");
extDrawer.id = "open-fing-plus-drawer";

const openFingRoot = document.getElementById("root");
if (openFingRoot) {
  openFingRoot.style.flexDirection = "row";
  openFingRoot.prepend(extButton);
  openFingRoot.appendChild(extDrawer);
}

ReactDOM.render(
  <Provider store={store}>
    <ContentButton />
  </Provider>,
  document.getElementById("open-fing-plus-button")
);

ReactDOM.render(
  <Provider store={store}>
    <ContentDrawer />
  </Provider>,
  document.getElementById("open-fing-plus-drawer")
);
