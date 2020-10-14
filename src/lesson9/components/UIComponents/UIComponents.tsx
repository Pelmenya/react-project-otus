import { Form, Field } from "formik";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const FormClass = css`
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

export const InputFullClass = css`
  border: 1px solid #164cb5;
  border-radius: 3px;
  margin-right: 10px;
  text-align: center;
  box-sizing: border-box;
  padding 5px 5px 5px 5px;
  &:last-of-type{
    margin-right: 0px;
  };
`;

export const InputHalfClass = css`
  ${InputFullClass}
  padding: 0;
  height: 25px;
  width: 45px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperColumn = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
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
  text-transform: uppercase;
  transition: background 0.5s;
  box-shadow: 0 0 0 #ec8928;
    &:hover {
      animation: none;
      background: #ec8928 radial-gradient(circle, transparent 1%, #ec8928 1%) center/15000%;
      color: #fff;
    }
    &:active {
      background-color: #fff;
      background-size: 100%;
      transition: background 0s;
    }
  }
`;

export const ButtonStart = styled(Button)`
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
  animation: pulse 1.2s infinite;
`;

export const FieldSet = styled.fieldset`
  width: calc(100% - 30px);
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const Legend = styled.legend`
  background-color: #fff;
  font-family: Helvetica, sans-serif;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FieldWrapperColumn = styled(FieldWrapper)`
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 3px;
`;

export const InputFull = styled.input`
  ${InputFullClass}
`;

export const InputHalf = styled.input`
  ${InputHalfClass}
`;

export const FormItem = styled.form`
  ${FormClass}
`;

export const FormFormik = styled(Form)`
  ${FormClass}
`;

export const InputFullFormik = styled(Field)`
  ${InputFullClass}
`;

export const InputHalfFormik = styled(Field)`
  ${InputHalfClass}
`;
