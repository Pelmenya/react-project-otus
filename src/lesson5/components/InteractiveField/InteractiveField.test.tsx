import React from "react";

import { InteractiveField } from "./InteractiveField";

import { shallow } from "enzyme";

describe("InteractiveField", () => {
  const FakeComponent: React.FC<{
    field: string[][];
    onClick: (x: number, y: number) => void;
  }> = () => null;

  it("renders passed component with field/onClick params and proper field size", () => {
    const field = shallow(
      <InteractiveField
        fieldComponent={FakeComponent}
        xSize={1}
        ySize={2}
        playerMarks={" "}
      />
    ).find(FakeComponent);
    expect(field.props()).toEqual({
      field: [[""], [""]],
      onClick: expect.any(Function),
    });
  });

  it("updates field on calling onClick with correct values", () => {
    const wrapper = shallow(
      <InteractiveField
        fieldComponent={FakeComponent}
        xSize={2}
        ySize={2}
        playerMarks={" "}
      />
    );
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        [" ", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(1, 1);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        [" ", ""],
        ["", " "],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(1, 1);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        [" ", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
  });

  it("Add or delete player mark on each move", () => {
    const wrapper = shallow(
      <InteractiveField
        fieldComponent={FakeComponent}
        xSize={8}
        ySize={1}
        playerMarks={" "}
      />
    );
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["", "", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [[" ", "", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });

    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["", "", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });

    wrapper.find(FakeComponent).props().onClick(1, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["", " ", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [[" ", " ", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });

    wrapper.find(FakeComponent).props().onClick(2, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [[" ", " ", " ", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(3, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [[" ", " ", " ", " ", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(3, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [[" ", " ", " ", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
  });

  it("updates field on calling onClick ignores incorrect clicks", () => {
    const wrapper = shallow(
      <InteractiveField
        fieldComponent={FakeComponent}
        xSize={2}
        ySize={2}
        playerMarks={" "}
      />
    );
    wrapper.find(FakeComponent).props().onClick(5, 1);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
  });
});
