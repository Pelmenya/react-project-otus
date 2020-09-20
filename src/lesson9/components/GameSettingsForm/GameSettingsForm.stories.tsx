import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SettingsForm, GameSettingsForm } from "./GameSettingsForm";
import styled from "@emotion/styled";

export default {
  title: "lesson9/GameSettingsForm",
  decorators: [withKnobs],
};

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const form = () => (
  <StoryWrapper>
    <SettingsForm FormComponent={GameSettingsForm} />
  </StoryWrapper>
);
