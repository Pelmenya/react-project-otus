import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { FieldSize } from "./FieldSize";

export default {
  title: "Lesson8/ Field Size",
  decorators: [withKnobs],
};

const elementOnChange = action("on change (jsx)");

export const emptyFieldSize = () => [
  <FieldSize
    key="jsx"
    onMouseUp={elementOnChange}
    inputs={object("inputs", [
      { type: "number", size: 10, name: "x" },
      { type: "number", size: 10, name: "y" },
    ])}
  />,
];
