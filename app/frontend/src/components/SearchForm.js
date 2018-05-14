import React from "react";
import { Form, Button } from "reactstrap";
import FieldGroup from "FieldGroup";
import "SearchForm.css";

export default function SearchForm() {
  return (
    <Form inline className="SearchForm">
      <FieldGroup
        id="search"
        name="firstName"
        type="text"
        label="Поиск"
        placeholder="Поиск"
        value={""}
        labelSrOnly
      />

      <Button type="submit" color="primary" onClick={e => e.preventDefault()}>
        <i className="fa fa-search" />
      </Button>
    </Form>
  );
}
