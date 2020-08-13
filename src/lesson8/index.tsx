import React from "react";
import { render } from "react-dom";

import { InteractiveField, Field } from "./components";

render(
  <InteractiveField
    xSize={10}
    ySize={10}
    playerMarks={" "}
    fieldComponent={Field}
  />,
  document.getElementById("root")
);
