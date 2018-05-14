import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

export default function FieldGroup({
  id,
  label,
  error,
  labelSrOnly,
  ...props
}) {
  return (
    <FormGroup>
      <Label for={id} className={labelSrOnly && "sr-only"}>
        {label}
      </Label>
      {error ? (
        <Input id={id} valid={!error} {...props} />
      ) : (
        <Input id={id} {...props} />
      )}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
}
