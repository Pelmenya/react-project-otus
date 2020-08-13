import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Cell = css`
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  display: inline-flex;
  margin: 1px;
  text-align: center;
  box-sizing: border-box;
`;

const CellDead = css`
  background-color: #fff;
`;

const CellLive = css`
  background-color: #00ff00;
`;

interface Props {
  isFilled: boolean;
}

export const CellItem = styled.button`
  ${Cell};
  ${({ isFilled }: Props) => (isFilled ? CellLive : CellDead)};
`;
