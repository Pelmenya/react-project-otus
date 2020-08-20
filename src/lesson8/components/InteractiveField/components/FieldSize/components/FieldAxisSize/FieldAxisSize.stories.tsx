import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { FieldAxisSizeInput } from "./FieldAxisSize";
export default {
  title: "Lesson8/Field Axis Size Input",
  decorators: [withKnobs],
};

export const nonFilledInput = () => [
  <FieldAxisSizeInput
    key="jsx"
    size={number("size", 10)}
    type={text("type", "number")}
    name={text("name", "x")}
    onChange={action("Input on change(jsx")}
  />,
];

export const filledInput = () => [
  <FieldAxisSizeInput
    key="jsx"
    type={text("type", "number")}
    size={number("size", 10)}
    name={text("name", "x")}
    onChange={action("Input on change(jsx")}
  />,
];
