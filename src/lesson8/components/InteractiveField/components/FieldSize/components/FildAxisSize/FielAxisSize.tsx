import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { FieldAxisSizeProps } from "types/field";

const FieldAxisSizeClass = css`
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  display: inline-flex;
  margin: 1px;
  text-align: center;
  box-sizing: border-box;
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
      onMouseDown={() => mouseDown(name)}
      onMouseUp={() => mouseUp(name)}
    />
  );
};
