import React from "react";
import { render } from "react-dom";

import { GameSettingsForm, SettingsForm } from "components/index";

render(
  <SettingsForm FormComponent={GameSettingsForm} />,
  document.getElementById("root")
);
