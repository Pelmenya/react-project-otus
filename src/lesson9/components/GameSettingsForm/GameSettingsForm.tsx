import React, { useState, ComponentType } from "react";
import {
  GameSettingsFormProps,
  PlayerSettingsFormInitial,
} from "types/formSettings";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";

import { InteractiveField, GameField, FieldSize } from "../InteractiveField";
import { PlayerSettingsFormResult } from "types/formSettings";
import { initialFormSettings } from "./GameSettingsFormInitial";

interface FormProps {
  FormComponent: ComponentType<GameSettingsFormProps>;
}

const ButtonStart = styled.button`
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 white;
    }
    50% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 white;
      box-shadow: 0 0 0 0 white;
    }
    50% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }

  width: 115px;
  height: 30px;
  font-family: Helvetica, sans-serif;
  border-radius: 3px;
  border:none;
  background-color: #ec8928;
  text-align: center;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
  cursor: pointer;
  transition: background 0.5s;
  box-shadow: 0 0 0 #ec8928;
  animation: pulse 1.2s infinite;
    &:hover {
      animation: none;
      background: #ec8928 radial-gradient(circle, transparent 1%, #ec8928 1%) center/15000%;
      color: #fff;
    }
    &:active {
      background-color: var(--white);
      background-size: 100%;
      transition: background 0s;
    }
}
`;

const FormWrapper = styled.div`
  display: flex;
`;

const FormWrapperColumn = styled(FormWrapper)`
  flex-direction: column;
`;

const FieldSet = styled.fieldset`
  width: calc(100% - 30px);
  margin-bottom: 15px;
  border-radius: 5px;
`;

const Legend = styled.legend`
  background-color: #fff;
  font-family: Helvetica, sans-serif;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const FieldWrapperColumn = styled(FieldWrapper)`
  flex-direction: column;
`;

const FormSettings = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  padding: 10px;
  border: 2px solid lightgray;
  margin-bottom: 10px;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 16px 30px 0px #200;
  border-radius: 5px;
  font-family: Helvetica, sans-serif;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 3px;
`;

const FieldInputFull = styled(Field)`
  border: 1px solid #164cb5;
  border-radius: 3px;
  margin-right: 10px;
  text-align: center;
  box-sizing: border-box;
  padding 5px 5px 5px 5px;
  &:last-of-type{
    margin-right: 0px;
  }
`;

const FieldInputHalf = styled(FieldInputFull)`
  padding: 0;
  height: 25px;
  width: 45px;
`;

export class GameSettingsForm extends React.Component<
  GameSettingsFormProps,
  {}
> {
  private initialFormSettings: PlayerSettingsFormInitial;

  private getInitialFormValues(): PlayerSettingsFormResult {
    const initialValues = {} as PlayerSettingsFormResult;
    this.initialFormSettings.forEach((item) => {
      initialValues[item.name] = item.value;
    });
    return initialValues;
  }

  private renderFormFields() {
    return this.initialFormSettings.map((item) => {
      if (item.layout === "column")
        return (
          <FieldWrapperColumn>
            <Label htmlFor={item.name}> {item.label} </Label>
            <FieldInputFull name={item.name} type={item.type} />
          </FieldWrapperColumn>
        );
      if (item.layout === "row")
        return (
          <FieldWrapper>
            <Label htmlFor={item.name}> {item.label} </Label>
            {item.type === "select" ? (
              <FieldInputHalf name={item.name} type={item.type} as={item.type}>
                {item.options ? (
                  item.options.map((option) => (
                    <option key={option}> {option}</option>
                  ))
                ) : (
                  <option key={"jsx"}> {item.value}</option>
                )}
              </FieldInputHalf>
            ) : (
              <FieldInputHalf
                name={item.name}
                type={item.type}
                min={item.min}
                max={item.max}
              />
            )}
          </FieldWrapper>
        );
      return;
    });
  }

  constructor(props: GameSettingsFormProps) {
    super(props);
    this.initialFormSettings = props.initialFormSettings;
    console.log(this.initialFormSettings);
  }

  render() {
    return (
      <Formik
        initialValues={this.getInitialFormValues()}
        onSubmit={this.props.onSubmit}
      >
        <FormSettings>
          <FieldSet>
            <Legend>Game Settings</Legend>
            {this.renderFormFields()}
          </FieldSet>
          <ButtonStart>Start</ButtonStart>
        </FormSettings>
      </Formik>
    );
  }
}

export const SettingsForm: React.FC<FormProps> = ({ FormComponent }) => {
  const [result, setResult] = useState({} as PlayerSettingsFormResult);

  function renderInteractiveField(props: PlayerSettingsFormResult) {
    if (Object.keys(props).length !== 0)
      return (
        <InteractiveField
          xSize={props.xSize}
          ySize={props.ySize}
          fillPercentage={props.fillPercentage}
          bgImageId={props.idImage}
          playerMarks={props.playerMarks}
          fieldComponent={GameField}
          fieldSizeComponent={FieldSize}
        />
      );
    return;
  }
  return (
    <FormWrapper>
      <FormWrapperColumn>
        <FormComponent
          initialFormSettings={initialFormSettings}
          onSubmit={setResult}
        />
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </FormWrapperColumn>
      {renderInteractiveField(result)}
    </FormWrapper>
  );
};
