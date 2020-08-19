import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { FieldAxisSizeProps } from "types/field";

const FieldAxisSizeClass = css`
  width: 50px;
  height: 20px;
  border: 1px solid #164cb5;
  margin-rigt: 10px;
  text-align: center;
  box-sizing: border-box;
  padding 5px 5px 5px 5px;
  &:last-of-type{
    margin-right: 0px;
  }
`;

export const FieldAxisSizeInput = styled.input`
  ${FieldAxisSizeClass};
`;

export const FieldAxisSizeItem: FC<FieldAxisSizeProps> = ({
  type,
  size,
  name,
  mouseDown,
  mouseUp,
}) => {
  return (
    <FieldAxisSizeInput
      type={type}
      min={size}
      name={name}
      value={size}
      onMouseDown={() => mouseDown(name)}
      onMouseUp={() => mouseUp(name)}
    />
  );
};
