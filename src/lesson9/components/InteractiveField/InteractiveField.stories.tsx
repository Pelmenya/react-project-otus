import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { GameField, FieldSize } from "./components";
import { InteractiveField } from "./InteractiveField";

export default {
  title: "Lesson9/ Interactive Field",
  decorators: [withKnobs],
};

const players = "😉";
export const withRealField = () => (
  <InteractiveField
    xSize={number("xSize", 15)}
    ySize={number("ySize", 15)}
    fillPercentage={50}
    bgImageId={1}
    playerMarks={players}
    fieldComponent={GameField}
    fieldSizeComponent={FieldSize}
  />
);
