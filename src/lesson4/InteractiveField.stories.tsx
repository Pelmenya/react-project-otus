import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Field from "./Field";
import InteractiveField from "./InteractiveField";
export default {
  title: "Lesson 4 / InteractiveField",
  decorators: [withKnobs],
};

const players = " ";
export const withRealField = () => (
  <InteractiveField
    xSize={number("xSize", 10)}
    ySize={number("ySize", 10)}
    playerMarks={players}
    fieldComponent={Field}
  />
);
