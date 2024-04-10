import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";

import avatar1 from "../../assets/images/users/user-1.jpg";

interface UserData {
  password: string;
}

/* bottom link */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer footer-alt">
      <p className="text-muted">
        {t("Not you? return")}{" "}
        <Link to={"/auth/login2"} className="text-muted ms-1">
          <b>{t("Sign In")}</b>
        </Link>
      </p>
    </footer>
  );
};

const LockScreen2 = () => {
  const { t } = useTranslation();

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      password: yup.string().required(t("Please enter Password")),
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    console.log(formData);
  };

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="text-center w-75 m-auto">
          <img
            src={avatar1}
            height="88"
            alt=""
            className="rounded-circle shadow"
          />
          <h4 className="text-dark-50 text-center mt-3">{t("Hi ! Geneva")}</h4>
          <p className="text-muted mb-4">
            {t("Enter your password to access the admin.")}
          </p>
        </div>

        <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            placeholder={t("Enter your password")}
            containerClass={"mb-3"}
          />

          <div className="mb-0 text-center d-grid">
            <Button variant="primary" type="submit">
              {t("Log In")}
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default LockScreen2;
