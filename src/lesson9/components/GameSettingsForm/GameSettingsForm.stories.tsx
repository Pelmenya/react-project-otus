import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SettingsForm, GameSettingsForm } from "./GameSettingsForm";

export default {
  title: "lesson9/GameSettingsForm",
  decorators: [withKnobs],
};

export const form = () => <SettingsForm FormComponent={GameSettingsForm} />;
