import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ColumnWrapperClass = css`
  border: 2px solid #ec8928;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jystify-content: space-between;
  box-sizing: border-box;
  padding 10px 10px 10px 10px;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  ${ColumnWrapperClass};
`;

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
  onMouseUp: (name: string, value: number) => void;
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
    size: number;
    name: string;
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
    this.onMouseUp = this.onMouseUp.bind(this);
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

  public onMouseUp(name: string, value: number) {
    console.log(value);
    switch (name) {
      case "x": {
        this.setState((state) => {
          if (value < this.xSize) {
            while (value < this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].pop()
              );
              this.xSize -= 1;
            }
          }
          if (value > this.xSize) {
            while (value > this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].push("")
              );
              this.xSize += 1;
            }
          }
          console.log(state.fieldState);
          return {
            fieldState: state.fieldState,
          };
        });
        break;
      }
      case "y": {
        this.setState((state) => {
          if (value < this.ySize) {
            this.ySize = value;
            state.fieldState.length = this.ySize;
          }
          if (value > this.ySize) {
            while (value > this.ySize) {
              state.fieldState[this.ySize] = [];
              for (let i = 0; i < this.xSize; i += 1) {
                state.fieldState[this.ySize].push("");
              }
              this.ySize += 1;
            }
            console.log(state.fieldState);
          }
          return {
            fieldState: state.fieldState,
          };
        });
        break;
      }
    }
  }

  render() {
    const FieldComponent = this.FieldComponent;
    const FieldSizeComponent = this.FieldSizeComponent;
    return (
      <ColumnWrapper>
        <FieldComponent
          key={"fieldComponent"}
          field={this.state.fieldState}
          onClick={this.onClick}
        />
        <FieldSizeComponent
          key={"fieldSizeComponent"}
          inputs={this.state.fieldSizeState}
          onMouseUp={this.onMouseUp}
        />
      </ColumnWrapper>
    );
  }
}
