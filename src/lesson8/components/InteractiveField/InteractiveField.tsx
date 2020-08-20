import React from "react";

type FieldComponentInterface = React.FC<{
  /**
   * Field state
   */
  field: string[][];
  /**
   * Cell interaction callback
   */
  onClick: (x: number, y: number) => void;
}>;

type FieldSizeComponentIterface = React.FC<{
  inputs: Array<{
    type: string;
    size: number;
    name: string;
  }>;
  onChange: (name: string) => void;
}>;

interface InteractiveFieldProps {
  /**
   * x-size for field
   */
  xSize: number;
  /**
   * y-size for field
   */
  ySize: number;
  /**
   * list of player's markers
   */
  playerMarks: string;
  /**
   * Component to render game field
   */
  fieldComponent: FieldComponentInterface;
  /**
   * Component to render game control size field
   */
  fieldSizeComponent: FieldSizeComponentIterface;
}

interface InteractiveFieldState {
  /**
   * Current game state
   */
  fieldState: string[][];
  fieldSizeState: Array<{
    type: string;
    name: string;
    size: number;
  }>;
}

export class InteractiveField extends React.Component<
  InteractiveFieldProps,
  InteractiveFieldState
> {
  private playerMarks: string;
  private FieldComponent: FieldComponentInterface;
  private FieldSizeComponent: FieldSizeComponentIterface;
  private xSize: number;
  private ySize: number;

  constructor(props: InteractiveFieldProps) {
    super(props);
    this.playerMarks = props.playerMarks;
    this.FieldComponent = props.fieldComponent;
    this.FieldSizeComponent = props.fieldSizeComponent;
    this.xSize = props.xSize;
    this.ySize = props.ySize;

    this.state = {
      fieldState: Array.from({ length: this.ySize }).map(() =>
        Array.from({ length: this.xSize }).fill("")
      ) as string[][],
      fieldSizeState: [
        { type: "number", size: this.xSize, name: "x" },
        { type: "number", size: this.ySize, name: "y" },
      ],
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onClick(x: number, y: number) {
    const isXValid = x >= 0 && x < this.state.fieldState[0].length;
    const isYValid = y >= 0 && y < this.state.fieldState.length;
    const areCoordinatesValid = isXValid && isYValid;
    if (!areCoordinatesValid) {
      return;
    }

    this.setState((state) => {
      const fieldStateCopy = state.fieldState.map((row) => [...row]);
      if (fieldStateCopy[y][x] === "") fieldStateCopy[y][x] = this.playerMarks;
      else fieldStateCopy[y][x] = "";

      return {
        fieldState: fieldStateCopy,
      };
    });
  }

  public onChange(name: string) {
    console.log(name);
  }

  render() {
    const FieldComponent = this.FieldComponent;
    const FieldSizeComponent = this.FieldSizeComponent;
    return [
      <FieldComponent
        key={"fieldComponent"}
        field={this.state.fieldState}
        onClick={this.onClick}
      />,
      <br key={1} />,
      <br key={2} />,
      <FieldSizeComponent
        key={"fieldSizeComponent"}
        inputs={this.state.fieldSizeState}
        onChange={this.onChange}
      />,
    ];
  }
}
