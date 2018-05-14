import React from "react";
import { withFormik } from "formik";
import { Button } from "reactstrap";
import { Form } from "formik";
import FieldGroup from "FieldGroup";
import Yup from "yup";
import Api from "Api";
import Auth from "Auth";
import User from "User";

export default withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: "",
    passwordConfirmation: ""
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Несуществующий почтовый адрес")
      .required("Почтовый адрес обязателен"),
    password: Yup.string()
      .min(8, "Пароль должен быть не меньше 8 символов")
      .required("Пароль обязателен"),
    passwordConfirmation: Yup.string()
      .min(8, "Пароль должен быть не меньше 8 символов")
      .required("Пароль обязателен")
      .test({
        name: "password-match",
        exclusive: false,
        message: "Пароли не совпадают",
        params: {
          reference: Yup.ref("password").path
        },
        test: function(value) {
          return value === this.resolve(Yup.ref("password"));
        }
      })
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.signUpUser(values)
      .then(({ data, headers }) => {
        Auth.setUserTokens(headers);
        User.setUserInfo(data.data);
        setSubmitting(false);
        props.handleSubmit();
      })
      .catch(({ response }) => {
        const errorText =
          response &&
          response.data &&
          response.data.errors &&
          response.data.errors.full_messages[0];
        setSubmitting(false);
        setErrors({
          email: errorText
        });
      });
  },

  displayName: "SignUpForm"
})(props => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    touched
  } = props;

  return (
    <Form>
      <FieldGroup
        id="formControlsEmail"
        label="Почтовый адрес"
        type="email"
        placeholder="email@example.com"
        name="email"
        value={values.email}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsPassword"
        label="Пароль"
        type="password"
        name="password"
        value={values.password}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsPasswordConfirmation"
        label="Подтверждение пароля"
        type="password"
        name="passwordConfirmation"
        value={values.passwordConfirmation}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" color="primary" disabled={isSubmitting}>
        Зарегистрировать
      </Button>
    </Form>
  );
});
