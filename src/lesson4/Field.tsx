import React, { FC } from "react";
import { Cell } from "./Cell";
import "./Field.css";
import type { FieldProps } from "./interfaces";

export const Field: FC<FieldProps> = ({ field, onClick }) => (
  <div className="field">
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} filled={filled} x={x} y={y} onClick={onClick} />
      )),
      y !== field.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);

export const getField = (props: FieldProps) => <Field {...props} />;
