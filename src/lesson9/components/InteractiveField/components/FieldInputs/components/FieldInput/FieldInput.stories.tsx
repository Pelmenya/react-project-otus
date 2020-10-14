import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { FieldInput } from "./FieldInput";
export default {
  title: "Lesson9/Field Input",
  decorators: [withKnobs],
};

export const nonFilledInput = () => [
  <FieldInput
    key="jsx"
    size={number("size", 15)}
    type={text("type", "number")}
    name={text("name", "x")}
    onMouseUp={action("Input on change(jsx")}
  />,
];

export const filledInput = () => [
  <FieldInput
    key="jsx"
    type={text("type", "number")}
    size={number("size", 15)}
    name={text("name", "x")}
    onMouseUp={action("Input on change(jsx")}
  />,
];
