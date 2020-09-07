import styled from "styled-components";

import theme from "../../../theme";

const {
  palette: { background, white },
  font,
} = theme;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 60px;
  right: 20px;

  width: 60px;
  height: 60px;
  z-index: 999;
  border-radius: 50%;
  border: 2px solid ${white};

  background: ${background};
  color: ${white};
  font-family: ${font};
  font-size: 20px;
  cursor: pointer;
`;
