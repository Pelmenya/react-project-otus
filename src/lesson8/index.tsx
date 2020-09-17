import React from "react";
import { render } from "react-dom";

import { InteractiveField, Field, FieldSize } from "./components";

render(
  <InteractiveField
    xSize={10}
    ySize={10}
    bgImageId={99}
    playerMarks={" "}
    fieldComponent={Field}
    fieldSizeComponent={FieldSize}
  />,
  document.getElementById("root")
);
