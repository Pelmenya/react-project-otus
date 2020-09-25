import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import type { CellProps } from "types/field";

const CellClass = css`
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  display: inline-flex;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  vertical-align: top;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 2px;
  padding-bottom: 0px;
  font-size: 10px;
  line-height: 1;
  transition: transform 1s, background-color 1s;
`;

const CellDeadClass = css`
  background-color: #fff;
`;

const CellLiveClass = css`
  background-color: #00ff00;
  transform: rotate(360deg);
`;

interface Props {
  isFilled: boolean;
}

const CellItem = styled.button`
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
