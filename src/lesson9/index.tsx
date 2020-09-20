import React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import {
  InteractiveField,
  Field,
  FieldSize,
  GameSettingsForm,
  SettingsForm,
} from "./components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

render(
  <Wrapper>
    <SettingsForm FormComponent={GameSettingsForm} />
    <InteractiveField
      xSize={10}
      ySize={10}
      bgImageId={1}
      playerMarks={" "}
      fieldComponent={Field}
      fieldSizeComponent={FieldSize}
    />
  </Wrapper>,
  document.getElementById("root")
);
