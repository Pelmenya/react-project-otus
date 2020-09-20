import React, { useState, ComponentType } from "react";
import { GameSettingsFormProps } from "types/formSettings";
import { Formik, Form, Field } from "formik";
import { ClassNames, css } from "@emotion/core";

const initialFormProps = {
  player: {
    name: "BatMan",
    symbol: "😉",
    colorLiveCell: "#00ff00",
    colorDeadCell: "#ffffff",
    xSize: 15,
    ySize: 15,
    fillPercentage: 50,
    speed: 1,
    speedPause: false,
    stop: false,
    reset: false,
    idImage: 1,
  },
} as const;

const FieldWrapper = `
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const FieldWrapperColumn = `
  flex-direction: column;
`;

const FontFamily = `
  font-family: Helvetica, sans-serif;
`;

const LabelClass = `color: #fff; margin-bottom: 3px;`;

const InputClass = `
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

const InputHeightModifyClass = `
  padding: 0;
  height: 25px;
  width: 45px
`;

const FormClass = `
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
`;

const FieldSetClass = `
  width: calc(100% - 30px);
  margin-bottom: 15px;
  border-radius: 5px;
`;

const LegendClass = `
  background-color: #fff;
  font-family: Helvetica, sans-serif;
`;

const ButtonStartClass = css`
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

interface FormProps {
  FormComponent: ComponentType<GameSettingsFormProps>;
}

const FormWrapperClass = css`
  display: flex;
  flex-direction: column;
`;

export const SettingsForm: React.FC<FormProps> = ({ FormComponent }) => {
  const [result, setResult] = useState({});
  return (
    <ClassNames>
      {({ css }) => (
        <div className={css(FormWrapperClass)}>
          <FormComponent onSubmit={setResult} />
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </ClassNames>
  );
};

export class GameSettingsForm extends React.Component<
  GameSettingsFormProps,
  {}
> {
  render() {
    return (
      <ClassNames>
        {({ css }) => (
          <Formik
            initialValues={initialFormProps}
            onSubmit={this.props.onSubmit}
          >
            <Form className={css(FormClass + FontFamily)}>
              <fieldset className={css(FieldSetClass)}>
                <legend className={css(LegendClass)}>Game Settings</legend>
                <div className={css(FieldWrapper + FieldWrapperColumn)}>
                  <label className={css(LabelClass)} htmlFor="player.name">
                    Your name
                  </label>
                  <Field
                    className={css(InputClass)}
                    type="text"
                    name="player.name"
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label className={css(LabelClass)} htmlFor="player.symbol">
                    Cell icon
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    name="player.symbol"
                    as="select"
                  >
                    <option>😉</option>
                    <option>😎</option>
                    <option>🙃</option>
                    <option>😋</option>
                    <option>🤪</option>
                  </Field>
                </div>
                <div className={css(FieldWrapper)}>
                  <label
                    className={css(LabelClass)}
                    htmlFor="player.colorLiveCell"
                  >
                    Color of live cell
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="color"
                    name="player.colorLiveCell"
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label
                    className={css(LabelClass)}
                    htmlFor="player.colorDeadCell"
                  >
                    Color of dead cell
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="color"
                    name="player.colorDeadCell"
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label className={css(LabelClass)} htmlFor="player.xSize">
                    Size axis X
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="number"
                    name="player.xSize"
                    min={5}
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label className={css(LabelClass)} htmlFor="player.ySize">
                    Size axis Y
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="number"
                    name="player.ySize"
                    min={5}
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label
                    className={css(LabelClass)}
                    htmlFor="player.fillPercentage"
                  >
                    Fill percentage
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="number"
                    name="player.fillPercentage"
                    min={0}
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label className={css(LabelClass)} htmlFor="player.speed">
                    Speed
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="number"
                    name="player.speed"
                    min={1}
                    max={5}
                  />
                </div>
                <div className={css(FieldWrapper)}>
                  <label className={css(LabelClass)} htmlFor="player.idImage">
                    Image number
                  </label>
                  <Field
                    className={css(InputClass + InputHeightModifyClass)}
                    type="number"
                    name="player.idImage"
                    min={1}
                    max={99}
                  />
                </div>
              </fieldset>
              <button className={css(ButtonStartClass)}>Start</button>
            </Form>
          </Formik>
        )}
      </ClassNames>
    );
  }
}
