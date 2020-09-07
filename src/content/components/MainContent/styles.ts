import styled from "styled-components";

import theme from "../../../theme";

const { background, white } = theme.palette;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  background: ${background};
  color: ${white};
`;
