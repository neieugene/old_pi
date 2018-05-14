import React from "react";
import { Form, withFormik } from "formik";
import { Button } from "reactstrap";
import FieldGroup from "FieldGroup";
import Yup from "yup";
import Api from "Api";
import Auth from "Auth";
import User from "User";

const ProfileForm = withFormik({
  mapPropsToValues: props => ({
    firstName: props.profile.firstName || "",
    lastName: props.profile.lastName || "",
    phone: props.profile.phone || "",
    age: props.profile.age || 0,
    description: props.profile.description || ""
  }),

  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    firstName: Yup.string().matches(
      /^[a-zA-Zа-яА-ЯЁё]*$/,
      "Имя должно содержать только буквы"
    ),
    lastName: Yup.string().matches(
      /^[a-zA-Zа-яА-ЯЁё\-]*$/,
      "Фамилия должна содержать только буквы"
    ),
    phone: Yup.string().matches(/^(\+?([0-9]{8,13}))$/, "Неверный формат")
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.profileUpdate(values, Auth.getUserTokens())
      .then(data => {
        User.setUserInfo(data);
        props.handleSubmit();
      })
      .catch(({response}) => {
        setErrors(response.data.errors);
      })
      .then(() => {
        setSubmitting(false);
      });
  },

  displayName: "ProfileForm"
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
        id="formControlsFirstName"
        label="Имя"
        type="input"
        name="firstName"
        value={values.firstName}
        error={touched.firstName && errors.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsLastName"
        label="Фамилия"
        type="input"
        name="lastName"
        value={values.lastName}
        error={touched.lastName && errors.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsPhone"
        label="Телефон"
        type="input"
        name="phone"
        value={values.phone}
        error={touched.phone && errors.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsAge"
        label="Возраст"
        type="number"
        name="age"
        value={values.age}
        error={touched.age && errors.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsDescription"
        label="Описание"
        type="text"
        name="description"
        value={values.description}
        error={touched.description && errors.description}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit" color="primary" disabled={isSubmitting}>
        Сохранить
      </Button>
    </Form>
  );
});

export default ProfileForm;
