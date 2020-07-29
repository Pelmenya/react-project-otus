import { mount } from "enzyme";
import { getCell } from "./Cell";

describe("Cell: JSX version", () => {
  it("renders button for dead cell", () => {
    expect(
      mount(
        getCell({
          onClick: jest.fn(),
        })
      ).html()
    ).toBe('<button class="cell cell_dead"></button>');
  });
  it("calls onClick callback on click by empty cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(getCell({ onClick }));
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("calls onClick callback", () => {
    const onClick = jest.fn();
    const x = 12;
    const y = 12;
    const wrapper = mount(getCell({ onClick, x, y }));
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(x, y);
  });
});
