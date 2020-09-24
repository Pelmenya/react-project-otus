import React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { GameSettingsForm, SettingsForm } from "./components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

render(
  <Wrapper>
    <SettingsForm FormComponent={GameSettingsForm} />
  </Wrapper>,
  document.getElementById("root")
);
