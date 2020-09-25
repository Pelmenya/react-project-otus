import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "lesson9/Screen Interective Field with Form Settings",
  decorators: [withKnobs],
};

import { GameSettingsForm, SettingsForm } from "./components";

export const screen = () => <SettingsForm FormComponent={GameSettingsForm} />;
