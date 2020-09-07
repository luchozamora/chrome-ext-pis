import styled from "styled-components";

import theme from "../../../theme";

const {
  palette: { background, white },
  font,
} = theme;

const drawerWidth = 500;

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${drawerWidth}px;
  height: 100%;
  z-index: 999;

  background: ${background};
  color: ${white};
  font-family: ${font};
  font-size: 20px;

  transition: 0.35s ease-in-out;

  &.open {
    margin-right: 0;
  }
  &.closed {
    margin-right: -${drawerWidth}px;
  }
`;
