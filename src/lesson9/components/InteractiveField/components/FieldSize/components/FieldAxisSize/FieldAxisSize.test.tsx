import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { FieldAxisSizeInput } from "./FieldAxisSize";

describe("Input counter", () => {
  it("renders input for size field", () => {
    expect(
      renderer
        .create(
          <FieldAxisSizeInput
            type={"number"}
            size={10}
            name={"sizeAxis"}
            onMouseUp={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("calls onMouseUp callback on mouseUp by input", () => {
    const onMouseUp = jest.fn();
    const wrapper = mount(
      <FieldAxisSizeInput
        type={"number"}
        size={10}
        name={"sizeAxis"}
        onMouseUp={onMouseUp}
      />
    );
    wrapper.simulate("mouseup");
    expect(onMouseUp).toHaveBeenCalled();
  });
  it("calls onMouseUp callback with passed type, size, name params", () => {
    const onMouseUp = jest.fn();
    const type = "number";
    const size = 10;
    const name = "axis";
    const wrapper = mount(
      <FieldAxisSizeInput
        type={type}
        size={size}
        name={name}
        onMouseUp={onMouseUp}
      />
    );
    wrapper.simulate("mouseup");
    expect(onMouseUp).toHaveBeenCalledWith(name, size);
  });
});
