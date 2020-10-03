import React from "react";
import styled from "@emotion/styled";

import {
  FormItem,
  Legend,
  FieldSet,
  Button,
  Wrapper,
  WrapperColumn
} from "components/index";

import { getAsyncUrl, getRandomMatrix2D } from "utils/utils";

const Title = styled.div`
  padding: 10px;
  border: 2px solid lightgray;
  margin-bottom: 30px;
  color: #fff;
  font-size: 36px;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 16px 30px 0px #200;
  border-radius: 5px;
  font-family: Helvetica, sans-serif;
`;

const ColumnWrapper = styled.div`
  border: 2px solid #ec8928;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jystify-content: space-between;
  box-sizing: border-box;
  background-size: cover;
  padding 10px 10px 10px 10px;
  width: calc(95vw - 230px);
  min-height: ${window.screen.height * 0.8}px;
  margin-right 15px;
`;

type InputsType = Array<{
  type: string;
  size: number;
  name: string;
}>;

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

type FieldInputsComponentIterface = React.FC<{
  inputs: InputsType;
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
   * Component fill percentage
   */
  fillPercentage: number;
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
  fieldSizeComponent: FieldInputsComponentIterface;
  /**
   * Component to render game control fill percentage field
   */
  fieldFillComponent: FieldInputsComponentIterface;
}

interface InteractiveFieldState {
  /**
   * Current game state
   */
  bgImageUrl: string;
  xSize: number;
  ySize: number;
  fillPercentage: number;
  fieldState: string[][];
  fieldSizeState: InputsType;
  fieldFillState: InputsType;
}

export class InteractiveField extends React.Component<
  InteractiveFieldProps,
  InteractiveFieldState
> {
  private xSize: number;
  private ySize: number;
  private playerMarks: string;
  private fillPercentage: number;
  private FieldComponent: FieldComponentInterface;
  private FieldSizeComponent: FieldInputsComponentIterface;
  private FieldFillComponent: FieldInputsComponentIterface;
  private stateUpdate: boolean;
  _isMounted: boolean;

  private setStateofInputByName(
    name: string,
    size: number,
    inputs: InputsType
  ): void {
    const input = inputs.find((item) => item.name === name);
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
    this.FieldFillComponent = props.fieldFillComponent;
    this.xSize = props.xSize;
    this.ySize = props.ySize;
    this.fillPercentage = props.fillPercentage;
    this._isMounted = false;
    this.stateUpdate = false;
    this.state = {
      bgImageUrl: "",
      xSize: this.xSize,
      ySize: this.xSize,
      fillPercentage: this.fillPercentage,
      fieldState: getRandomMatrix2D(
        this.ySize,
        this.xSize,
        this.fillPercentage,
        this.playerMarks
      ),
      fieldSizeState: [
        { type: "number", size: this.xSize, name: "X" },
        { type: "number", size: this.ySize, name: "Y" },
      ],
      fieldFillState: [
        { type: "number", size: this.fillPercentage, name: "Fill %" },
      ],
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseUpFieldInputs = this.onMouseUpFieldInputs.bind(this);
    this.onMouseUpFieldFill = this.onMouseUpFieldFill.bind(this);
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
        fieldFillState: state.fieldFillState,
      };
    });
  }

  public onMouseUpFieldFill(name: string, value: number) {
    this.stateUpdate = false;
    if (value !== this.fillPercentage) {
      this.setState((state) => {
        this.setStateofInputByName(
          name,
          this.fillPercentage,
          this.state.fieldFillState
        );
        this.fillPercentage = value;
        this.stateUpdate = true;
        return {
          fieldState: getRandomMatrix2D(
            this.xSize,
            this.ySize,
            this.fillPercentage,
            this.playerMarks
          ),
          fieldSizeState: state.fieldSizeState,
          fieldFillState: state.fieldFillState,
        };
      });
    }
  }

  public onMouseUpFieldInputs(name: string, value: number) {
    this.stateUpdate = false;
    switch (name) {
      case "X": {
        this.setState((state) => {
          if (value < this.xSize) {
            while (value < this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].pop()
              );
              this.xSize -= 1;
              this.setStateofInputByName(
                name,
                this.xSize,
                state.fieldSizeState
              );
              this.stateUpdate = true;
            }
          }
          if (value > this.xSize) {
            while (value > this.xSize) {
              Object.keys(state.fieldState).forEach((item) =>
                state.fieldState[Number(item)].push("")
              );
              this.xSize += 1;
              this.setStateofInputByName(
                name,
                this.xSize,
                this.state.fieldSizeState
              );
              this.stateUpdate = true;
            }
          }
          if (this.stateUpdate) this.setImage();
          return {
            xSize: this.xSize,
            fieldState: state.fieldState,
            fieldSizeState: state.fieldSizeState,
            fieldFillState: state.fieldFillState,
          };
        });
        break;
      }
      case "Y": {
        this.setState((state) => {
          if (value < this.ySize) {
            this.ySize = value;
            state.fieldState.length = this.ySize;
            this.setStateofInputByName(
              name,
              this.ySize,
              this.state.fieldSizeState
            );
            this.stateUpdate = true;
          }
          if (value > this.ySize) {
            while (value > this.ySize) {
              state.fieldState[this.ySize] = [];
              for (let i = 0; i < this.xSize; i += 1) {
                state.fieldState[this.ySize].push("");
              }
              this.ySize += 1;
              this.setStateofInputByName(
                name,
                this.ySize,
                this.state.fieldSizeState
              );
              this.stateUpdate = true;
            }
          }
          if (this.stateUpdate) this.setImage();
          return {
            ySize: this.ySize,
            fieldState: state.fieldState,
            fieldSizeState: state.fieldSizeState,
            fieldFillState: state.fieldFillState,
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
    const FieldFillComponent = this.FieldFillComponent;
    const { bgImageUrl } = this.state;
    return [
      <ColumnWrapper
        key={"fieldWrapper"}
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <Title>{"Game of Life"}</Title>
        <FieldComponent
          key={"fieldComponent"}
          field={this.state.fieldState}
          onClick={this.onClick}
        />
      </ColumnWrapper>,
      <FormItem key={"fieldFormControl"}>
        <FieldSet>
          <Legend>Game Control Panel</Legend>
          <FieldSizeComponent
            key={"fieldSizeComponent"}
            inputs={this.state.fieldSizeState}
            onMouseUp={this.onMouseUpFieldInputs}
          />
          <FieldFillComponent
            key={"fieldFillComponent"}
            inputs={this.state.fieldFillState}
            onMouseUp={this.onMouseUpFieldFill}
          />
        </FieldSet>
        <Button type="button">Reset</Button>
      </FormItem>,
    ];
  }
}
