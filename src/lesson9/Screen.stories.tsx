import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "@emotion/styled";

export default {
  title: "lesson9/Screen Interective Field with Form Settings",
  decorators: [withKnobs],
};

import {
  InteractiveField,
  Field,
  FieldSize,
  GameSettingsForm,
  SettingsForm,
} from "./components";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const screen = () => (
  <ScreenWrapper>
    <SettingsForm FormComponent={GameSettingsForm} />
    <InteractiveField
      xSize={10}
      ySize={10}
      bgImageId={1}
      playerMarks={"😉"}
      fieldComponent={Field}
      fieldSizeComponent={FieldSize}
    />
  </ScreenWrapper>
);
