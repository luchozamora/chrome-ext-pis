import React from "react";

import { PopupContainer } from "./styles";

const MainPopup = () => {
  const sendPopupMessage = () => {
    // @ts-ignore
    chrome.runtime.sendMessage({ message: "expand" }, function (response) {
      return null;
    });
  };

  return (
    <PopupContainer>
      <p>CONTENT OF THE POPUP!</p>
      <button onClick={sendPopupMessage}>CLICK ME</button>
    </PopupContainer>
  );
};

export default MainPopup;
