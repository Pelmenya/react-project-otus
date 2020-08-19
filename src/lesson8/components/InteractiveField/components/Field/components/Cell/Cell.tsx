import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import type { CellProps } from "types/field";

const CellClass = css`
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  display: inline-flex;
  margin: 1px;
  text-align: center;
  box-sizing: border-box;
`;

const CellDeadClass = css`
  background-color: #fff;
`;

const CellLiveClass = css`
  background-color: #00ff00;
`;

interface Props {
  isFilled: boolean;
}

export const CellItem = styled.button`
  ${CellClass};
  ${({ isFilled }: Props) => (isFilled ? CellLiveClass : CellDeadClass)};
`;

export const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
  const isFilled = Boolean(filled);
  return (
    <CellItem isFilled={isFilled} onClick={() => onClick(x || 0, y || 0)}>
      {filled}
    </CellItem>
  );
};
