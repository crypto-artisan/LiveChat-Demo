import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

//actions
import { resetAuth, forgotPassword } from "../../redux/actions";
import { RootState, AppDispatch } from "../../redux/store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";

interface UserData {
  username: string;
}

/* bottom link */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Back to")}{" "}
          <Link to={"/auth/login"} className="text-white ms-1">
            <b>{t("Log in")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const ForgetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  const { loading, passwordReset, resetPasswordSuccess, error } = useSelector(
    (state: RootState) => ({
      loading: state.Auth.loading,
      user: state.Auth.user,
      error: state.Auth.error,
      passwordReset: state.Auth.passwordReset,
      resetPasswordSuccess: state.Auth.resetPasswordSuccess,
    })
  );

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required(t("Please enter Username")),
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    dispatch(forgotPassword(formData["username"]));
  };

  return (
    <>
      <AuthLayout
        helpText={t(
          "Enter your email address and we'll send you an email with instructions to reset your password."
        )}
        bottomLinks={<BottomLink />}
      >
        {resetPasswordSuccess && (
          <Alert variant="success">{resetPasswordSuccess.message}</Alert>
        )}

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        {!passwordReset && (
          <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
            <FormInput
              label={t("Username")}
              type="text"
              name="username"
              placeholder={t("Enter your username")}
              containerClass={"mb-3"}
            />

            <div className="d-grid text-center">
              <Button variant="primary" type="submit" disabled={loading}>
                {t("Reset Password")}
              </Button>
            </div>
          </VerticalForm>
        )}
      </AuthLayout>
    </>
  );
};

export default ForgetPassword;
