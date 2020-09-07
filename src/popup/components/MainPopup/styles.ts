import styled from "styled-components";

import theme from "../../../theme";

const {
  palette: { background, white },
  font,
} = theme;

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${background};
  color: ${white};

  font-family: ${font};
`;
