import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { FieldSizeProps } from "types/field";
import { FieldAxisSizeInput } from "./components";

const FieldSizeClass = css`
  border: 2px solid #ec8928;
  border-radius: 2px;
  display: inline-flex;
  box-sizing: border-box;
  padding 5px 5px 5px 5px;
`;

const FieldSizeItem = styled.div`
  ${FieldSizeClass};
`;

export const FieldSize: FC<FieldSizeProps> = ({ inputs, onMouseUp }) => {
  return (
    <FieldSizeItem>
      {inputs.map((item) => [
        <FieldAxisSizeInput
          key={item.name}
          type={item.type}
          size={item.size}
          name={item.name}
          onMouseUp={(name, value) => onMouseUp(name, value)} // если не сделать - виснет при зажатой стрелке
        />,
      ])}
    </FieldSizeItem>
  );
};
