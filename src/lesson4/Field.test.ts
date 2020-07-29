import { mount } from "enzyme";
import { getField } from "./Field";

describe("Field: JSX version", () => {
  it("renders cells for passed empty field", () => {
    const field = mount(
      getField({
        field: [
          ["", ""],
          ["", ""],
        ],
        onClick: jest.fn(),
      })
    );
    expect(field.find("br").length).toBe(1); // rows - 1
    expect(field.find(".cell").length).toBe(4); // cell
    expect(field.find(".cell_dead").length).toBe(4); // cell
  });
  it("renders filled cells", () => {
    const field = mount(
      getField({
        field: [
          [" ", " "],
          [" ", ""],
        ],
        onClick: jest.fn(),
      })
    );
    console.log(field.html());
    expect(field.find("br").length).toBe(1);
    expect(field.find(".cell").length).toBe(4);
    expect(field.find(".cell_dead").length).toBe(1);
    expect(field.find(".cell_live").length).toBe(3);
    expect(
      field.findWhere(
        (el) => el.html() === " " && typeof el.type() !== "string"
      ).length
    ).toBe(3);
  });

  it("passed onClick inside cells", () => {
    const onClick = jest.fn();
    const field = mount(
      getField({
        field: [["", "x", "o"]],
        onClick,
      })
    );
    field.find(".cell_dead").simulate("click");
    expect(onClick).toHaveBeenCalledWith(0, 0);
  });
});
