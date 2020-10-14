import React, { useState, ComponentType } from "react";
import { Formik } from "formik";

import {
  GameSettingsFormProps,
  PlayerSettingsFormInitial,
  PlayerSettingsFormResult,
} from "types/formSettings";

import {
  Wrapper,
  ButtonStart,
  FieldSet,
  Legend,
  FieldWrapper,
  FieldWrapperColumn,
  FormFormik,
  Label,
  InputFullFormik,
  InputHalfFormik,
  InteractiveField,
  GameField,
  FieldInputs,
} from "components/index";

import { initialFormSettings } from "./GameSettingsFormInitial";

interface FormProps {
  FormComponent: ComponentType<GameSettingsFormProps>;
}

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
            <InputFullFormik name={item.name} type={item.type} />
          </FieldWrapperColumn>
        );
      if (item.layout === "row")
        return (
          <FieldWrapper>
            <Label htmlFor={item.name}> {item.label} </Label>
            {item.type === "select" ? (
              <InputHalfFormik name={item.name} type={item.type} as={item.type}>
                {item.options ? (
                  item.options.map((option) => (
                    <option key={option}> {option}</option>
                  ))
                ) : (
                  <option key={"jsx"}> {item.value}</option>
                )}
              </InputHalfFormik>
            ) : (
              <InputHalfFormik
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
        <FormFormik>
          <FieldSet>
            <Legend>Game Settings</Legend>
            {this.renderFormFields()}
          </FieldSet>
          <ButtonStart>Start</ButtonStart>
        </FormFormik>
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
          fieldSizeComponent={FieldInputs}
          fieldFillComponent={FieldInputs}
        />
      );
    return (
      <FormComponent
        initialFormSettings={initialFormSettings}
        onSubmit={setResult}
      />
    );
  }
  return <Wrapper>{renderInteractiveField(result)}</Wrapper>;
};
