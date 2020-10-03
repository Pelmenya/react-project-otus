import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { GameField } from "./GameField";

export default {
  title: "Lesson9/ Field",
  decorators: [withKnobs],
};

const elementClickedJsx = action("Cell clicked (jsx)");

export const emptyField = () => [
  <GameField
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
  <GameField
    key="jsx"
    onClick={elementClickedJsx}
    field={object("field", [
      [" ", " ", ""],
      ["", " ", ""],
      ["", "", ""],
    ])}
  />,
];
