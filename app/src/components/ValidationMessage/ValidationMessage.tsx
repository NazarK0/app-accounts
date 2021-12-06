import { FC } from "react";
import IValidationErrorProps from "../../types/ValidationError.props";

const ValidationMessage = ({errorMessage}: IValidationErrorProps ): any => (
  <>
    <p className="help is-danger">{errorMessage}</p>;
  </>
);

export default ValidationMessage;
