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

const FieldAxisSizeItem = styled.input`
  ${FieldAxisSizeClass};
`;

export const FieldAxisSizeInput: FC<FieldAxisSizeProps> = ({
  type,
  size,
  name,
  onMouseDown,
  onMouseUp,
}) => {
  return (
    <FieldAxisSizeItem
      type={type}
      min={size}
      name={name}
      defaultValue={size}
      onMouseDown={() => onMouseDown(name)}
      onMouseUp={() => onMouseUp(name)}
    />
  );
};
