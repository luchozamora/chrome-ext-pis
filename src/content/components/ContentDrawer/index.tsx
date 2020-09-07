import React, { useEffect } from "react";
import { connect } from "react-redux";

import { DrawerContainer } from "./styles";

interface DrawerProps {
  isDrawerOpen: boolean;
}

const ContentDrawer = ({ isDrawerOpen }: DrawerProps) => {
  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <DrawerContainer className={isDrawerOpen ? "open" : "closed"}>
      <p>Drawer for the OpenFINGplus extension</p>
    </DrawerContainer>
  );
};

const mapState = (state: any) => ({
  isDrawerOpen: state.drawer.isOpen,
});

export default connect(mapState, {})(ContentDrawer);
