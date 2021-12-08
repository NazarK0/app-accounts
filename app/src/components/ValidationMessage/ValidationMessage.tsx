import { ErrorMessageProps } from "formik";
import React,{ FC } from "react";
import IValidationErrorProps from "../../types/ValidationError.props";

const ValidationMessage: FC<IValidationErrorProps> = ({errorMessage}) => (
  <p className="help is-danger">{errorMessage}</p>);


export default ValidationMessage;
