import React, { FC } from "react";
import styled from "@emotion/styled";

import { Label, WrapperColumn } from "components/index";
import { FieldInputsProps } from "types/field";
import { FieldInput } from "./components";

const FieldInputsItem = styled.div`
  border: 2px solid #ec8928;
  border-radius: 2px;
  display: flex;
  box-sizing: border-box;
  padding 5px 5px 5px 5px;
  width: 100%;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 16px 30px 0px #200;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const FieldInputs: FC<FieldInputsProps> = ({ inputs, onMouseUp }) => {
  return (
    <FieldInputsItem>
      {inputs.map((item) => [
        <WrapperColumn key={item.type + "column"}>
          <Label key={item.name + "label"}>
            {"Size  "}
            {item.name}
          </Label>
          <FieldInput
            key={item.name}
            type={item.type}
            size={item.size}
            name={item.name}
            onMouseUp={(name, value) => onMouseUp(name, value)} // если не сделать - виснет при зажатой стрелке
          />
        </WrapperColumn>,
      ])}
    </FieldInputsItem>
  );
};
