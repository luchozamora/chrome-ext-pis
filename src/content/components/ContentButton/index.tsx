import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ButtonContainer } from "./styles";
import { openDrawer, closeDrawer } from "../ContentDrawer/duck/slice";

interface ButtonProps {
  isDrawerOpen: boolean;
  openDrawer: () => {};
  closeDrawer: () => {};
}

const ContentButton = ({
  isDrawerOpen,
  openDrawer,
  closeDrawer,
}: ButtonProps) => {
  const toggleDrawer = () => (isDrawerOpen ? closeDrawer() : openDrawer());

  return (
    <ButtonContainer onClick={toggleDrawer}>
      <p>{isDrawerOpen ? "-" : "+"}</p>
    </ButtonContainer>
  );
};

const mapState = (state: any) => ({
  isDrawerOpen: state.drawer.isOpen,
});
const mapDispatch = { openDrawer, closeDrawer };

export default connect(mapState, mapDispatch)(ContentButton);
