import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { getAsyncUrl } from "utils/utils";

const ColumnWrapperClass = css`
  border: 2px solid #ec8928;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jystify-content: space-between;
  box-sizing: border-box;
  background-size: cover;
  padding 10px 10px 10px 10px;
  width: 100%;
  height: 100%;
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
   * id background-image game container
   */
  bgImageId: number;
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
  bgImageUrl: string;
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
  private xSize: number;
  private ySize: number;
  private playerMarks: string;
  private FieldComponent: FieldComponentInterface;
  private FieldSizeComponent: FieldSizeComponentIterface;
  private stateUpdate: boolean;
  _isMounted: boolean;

  private setStateofInputByName(name: string, size: number): void {
    const input = this.state.fieldSizeState.find((item) => item.name === name);
    if (input) input.size = size;
  }

  private setImage() {
    getAsyncUrl(this.props.bgImageId).then((url: string) => {
      if (this._isMounted) {
        const img = new Image();
        img.onload = () => {
          this.setState({
            bgImageUrl: url,
          });
        };
        img.onerror = () => this.setImage();
        img.src = url;
      }
    });
  }

  constructor(props: InteractiveFieldProps) {
    super(props);
    this.playerMarks = props.playerMarks;
    this.FieldComponent = props.fieldComponent;
    this.FieldSizeComponent = props.fieldSizeComponent;
    this.xSize = props.xSize;
    this.ySize = props.ySize;
    this._isMounted = false;
    this.stateUpdate = false;
    this.state = {
      bgImageUrl: "",
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
      this.stateUpdate = false;
      return;
    }

    this.setState((state) => {
      this.stateUpdate = true;
      const fieldStateCopy = state.fieldState.map((row) => [...row]);
      if (fieldStateCopy[y][x] === "") fieldStateCopy[y][x] = this.playerMarks;
      else fieldStateCopy[y][x] = "";

      return {
        fieldState: fieldStateCopy,
        fieldSizeState: state.fieldSizeState,
      };
    });
  }

  public onMouseUp(name: string, value: number) {
    this.stateUpdate = false;
    switch (name) {
      case "x": {
        this.setState((state) => {
          if (value < this.xSize) {
            while (value < this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].pop()
              );
              this.xSize -= 1;
              this.setStateofInputByName(name, this.xSize);
              this.setImage();
              this.stateUpdate = true;
            }
          }
          if (value > this.xSize) {
            while (value > this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].push("")
              );
              this.xSize += 1;
              this.setStateofInputByName(name, this.xSize);
              this.setImage();
              this.stateUpdate = true;
            }
          }
          return {
            fieldState: state.fieldState,
            fieldSizeState: state.fieldSizeState,
          };
        });
        break;
      }
      case "y": {
        this.setState((state) => {
          if (value < this.ySize) {
            this.ySize = value;
            state.fieldState.length = this.ySize;
            this.setStateofInputByName(name, this.ySize);
            this.stateUpdate = true;
            this.setImage();
          }
          if (value > this.ySize) {
            while (value > this.ySize) {
              state.fieldState[this.ySize] = [];
              for (let i = 0; i < this.xSize; i += 1) {
                state.fieldState[this.ySize].push("");
              }
              this.ySize += 1;
              this.setStateofInputByName(name, this.ySize);
              this.setImage();
              this.stateUpdate = true;
            }
          }
          return {
            fieldState: state.fieldState,
            fieldSizeState: state.fieldSizeState,
          };
        });
        break;
      }
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.setImage();
  }

  shouldComponentUpdate(
    nextProps: InteractiveFieldProps,
    nextState: InteractiveFieldState
  ) {
    return (
      this.state.bgImageUrl !== nextState.bgImageUrl ||
      nextProps.bgImageId !== this.props.bgImageId ||
      this.stateUpdate
    );
  }

  componentDidUpdate(prevProps: InteractiveFieldProps) {
    if (prevProps.bgImageId !== this.props.bgImageId) {
      this.setImage();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const FieldComponent = this.FieldComponent;
    const FieldSizeComponent = this.FieldSizeComponent;
    const { bgImageUrl } = this.state;
    console.log(this.props.bgImageId);
    return (
      <ColumnWrapper style={{ backgroundImage: `url(${bgImageUrl})` }}>
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
