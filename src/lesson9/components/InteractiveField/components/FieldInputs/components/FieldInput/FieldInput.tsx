import React, { FC } from "react";

import { InputHalf } from "components/index";
import { FieldInputProps } from "types/field";

export const FieldInput: FC<FieldInputProps> = ({
  type,
  size,
  name,
  onMouseUp,
}) => {
  return (
    <InputHalf
      type={type}
      min={0}
      max={100}
      name={name}
      defaultValue={size}
      onMouseUp={(event) => onMouseUp(name, Number(event.target.value))} //какой то костыль !!!
    />
  );
};
