import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { Cell } from "./Cell";
export default {
  title: "Lesson 4 / Cell",
  decorators: [withKnobs],
};

export const nonFilledCell = () => [
  <Cell
    onClick={action("Cell clicked(jsx")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];

export const filledCell = () => [
  <Cell
    onClick={action("Cell clicked(jsx")}
    filled={text("living Cell", " ")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];
