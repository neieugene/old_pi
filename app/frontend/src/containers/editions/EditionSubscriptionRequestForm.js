import React from "react";
import { Form, withFormik } from "formik";
import { Button } from "reactstrap";
import FieldGroup from "FieldGroup";
import Yup from "yup";
import Api from "Api";
import Auth from "Auth";
import User from "User";
import { toast } from "react-toastify";

const EditionSubscriptionRequestForm = withFormik({
  mapPropsToValues: props => ({
    email: User.getUserInfo().email,
    phone: User.getUserInfo().phone || "",
    firstName: User.getUserInfo().firstName || "",
    lastName: User.getUserInfo().lastName || "",
    editionId: props.editionId
  }),

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[а-яА-Я]*$/, "Имя должно содержать только буквы")
      .required("Имя обязательно"),
    lastName: Yup.string()
      .matches(/^[а-яА-Я]*$/, "Фамилия должна содержать только буквы")
      .required("Фамилия обязательна"),
    email: Yup.string()
      .email("Несуществующий почтовый адрес")
      .required("Почтовый адрес обязателен"),
    phone: Yup.string()
      .matches(/^(\+?([0-9]{8,13}))$/, "Введите корректный номер")
      .required("Номер обязателен")
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.createSubscriptionRequests(values, Auth.getUserTokens())
    .then(res => {
      User.setUserInfo(res.data);
      props.handleSubmit();
      toast.info("Запрос успешно создан");
    })
    .catch(({ response }) => {
      setErrors(response.data.errors);
    }).then(() => {
      setSubmitting(false);
    });
  },

  displayName: "EditionSubscriptionRequestForm"
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
        label="Email"
        type="input"
        name="email"
        value={values.email || ""}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsPhone"
        label="Контактный телефон"
        type="input"
        name="phone"
        value={values.phone || ""}
        error={touched.phone && errors.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsName"
        label="Имя"
        type="input"
        name="firstName"
        value={values.firstName}
        error={touched.firstName && errors.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsName"
        label="Фамилия"
        type="input"
        name="lastName"
        value={values.lastName}
        error={touched.lastName && errors.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit" disabled={isSubmitting}>
        Отправить
      </Button>
    </Form>
  );
});

export default EditionSubscriptionRequestForm;
