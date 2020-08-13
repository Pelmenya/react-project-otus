import React, { FC } from "react";
import { Cell } from "./components";
import { FieldContainer } from "./FieldContainer";

import type { FieldProps } from "src/lesson8/components/InteractiveField/components/Field/node_modules/types/field";

export const Field: FC<FieldProps> = ({ field, onClick }) => (
  <FieldContainer>
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} filled={filled} x={x} y={y} onClick={onClick} />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldContainer>
);
