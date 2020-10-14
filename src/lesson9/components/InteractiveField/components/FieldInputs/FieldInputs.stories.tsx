import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { FieldInputs } from "./FieldInputs";

export default {
  title: "Lesson9/ Field Inputs",
  decorators: [withKnobs],
};

const elementOnChange = action("on change (jsx)");

export const FullFieldInputs = () => [
  <FieldInputs
    key="jsx"
    onMouseUp={elementOnChange}
    inputs={object("inputs", [
      { type: "number", size: 10, name: "x" },
      { type: "number", size: 10, name: "y" },
    ])}
  />,
];
