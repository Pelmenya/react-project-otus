import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { Cell } from "./components";
import type { FieldProps } from "types/field";

const FieldClass = css`
  display: block;
  padding: 10px;
  border: 2px solid lightgray;
  margin-bottom: 10px;
`;

const FieldComponent = styled.div`
  ${FieldClass};
`;

export const Field: FC<FieldProps> = ({ field, onClick }) => (
  <FieldComponent>
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} filled={filled} x={x} y={y} onClick={onClick} />
      )),
      y !== field.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldComponent>
);
