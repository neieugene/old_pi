import React from "react";
import { Col } from "reactstrap";
import ProfileForm from "ProfileForm";

export default function EditProfile({ profile, handleSubmit, ...props }) {
  return (
    <div>
      <Col xs={12}>
        <h2>Редактировать профиль</h2>
      </Col>
      <Col xs={12} md={8}>
        <ProfileForm profile={profile} handleSubmit={handleSubmit} />
      </Col>
    </div>
  );
}
