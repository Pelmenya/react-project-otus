import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Cell } from "./Cell";

describe("Cell", () => {
  it("renders button for dead cell", () => {
    expect(
      renderer.create(<Cell onClick={jest.fn()} />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders button for live cell", () => {
    const isFilled = " ";
    expect(
      renderer.create(<Cell filled={isFilled} onClick={jest.fn()} />).toJSON()
    ).toMatchSnapshot();
  });

  it("calls onClick callback on click by dead cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Cell onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onClick callback on click by live cell", () => {
    const onClick = jest.fn();
    const isFilled = " ";
    const wrapper = mount(<Cell filled={isFilled} onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const x = 12;
    const y = 14;
    const wrapper = mount(<Cell onClick={onClick} x={x} y={y} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(x, y);
  });
});
