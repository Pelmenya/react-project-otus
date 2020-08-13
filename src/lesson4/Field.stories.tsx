import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import Field from "./Field";

export default {
  title: "Lesson 4 / Field",
  decorators: [withKnobs],
};

const elementClickedJsx = action("Cell clicked (jsx)");

export const emptyField = () => [
  <Field
    key="jsx"
    onClick={elementClickedJsx}
    field={object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])}
  />,
];

export const nonEmptyField = () => [
  <Field
    key="jsx"
    onClick={elementClickedJsx}
    field={object("field", [
      [" ", " ", ""],
      ["", " ", ""],
      ["", "", ""],
    ])}
  />,
];
