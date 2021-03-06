import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { GameField } from "./GameField";

describe("Field", () => {
  it("renders cells for passed empty field", () => {
    expect(
      renderer
        .create(
          <GameField
            field={[
              ["", ""],
              ["", ""],
            ]}
            onClick={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders filled cells snapshot check", () => {
    expect(
      renderer
        .create(
          <GameField
            field={[
              ["x", "o"],
              ["o", ""],
            ]}
            onClick={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders filled cells", () => {
    const field = mount(
      <GameField
        field={[
          ["x", "o"],
          ["o", ""],
        ]}
        onClick={jest.fn()}
      />
    );
    expect(
      field.findWhere(
        (el) => el.html() === "x" && typeof el.type() !== "string"
      ).length
    ).toBe(1);
    expect(
      field.findWhere(
        (el) => el.html() === "o" && typeof el.type() !== "string"
      ).length
    ).toBe(2);
  });
  it("passed onClick inside cells", () => {
    const onClick = jest.fn();
    const field = mount(
      <GameField field={[["", "x", "o"]]} onClick={onClick} />
    );
    field.find("button:empty").simulate("click");
    expect(onClick).toHaveBeenCalledWith(0, 0);
  });
});
