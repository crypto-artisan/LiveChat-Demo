import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// components
import AuthLayout from "./AuthLayout";

// get success svg
const Success = () => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 98 98" style={{ height: "120px" }} > <g> <circle id="XMLID_50_" className="st0" style={{ fill: "#FFFFFF" }} cx="49" cy="49" r="49" /> <g id="XMLID_4_"> <path id="XMLID_49_" className="st1" style={{ fill: "#1abc9c" }} d="M77.3,42.7V77c0,0.6-0.4,1-1,1H21.7c-0.5,0-1-0.5-1-1V42.7c0-0.3,0.1-0.6,0.4-0.8l27.3-21.7 c0.3-0.3,0.8-0.3,1.2,0l27.3,21.7C77.1,42.1,77.3,42.4,77.3,42.7z" /> <path id="XMLID_48_" className="st2" style={{ fill: "#FFFFFF", stroke: "#1abc9c", strokeWidth: 2, strokeMiterlimit: 10, }} d="M66.5,69.5h-35c-1.1,0-2-0.9-2-2V26.8c0-1.1,0.9-2,2-2h35c1.1,0,2,0.9,2,2v40.7 C68.5,68.6,67.6,69.5,66.5,69.5z" /> <path id="XMLID_47_" className="st1" style={{ fill: "#1abc9c" }} d="M62.9,33.4H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,33,63.4,33.4,62.9,33.4z" /> <path id="XMLID_46_" className="st1" style={{ fill: "#1abc9c" }} d="M62.9,40.3H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,39.9,63.4,40.3,62.9,40.3z" /> <path id="XMLID_45_" className="st1" style={{ fill: "#1abc9c" }} d="M62.9,47.2H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,46.8,63.4,47.2,62.9,47.2z" /> <path id="XMLID_44_" className="st1" style={{ fill: "#1abc9c" }} d="M62.9,54.1H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,53.7,63.4,54.1,62.9,54.1z" /> <path id="XMLID_43_" className="st2" style={{ fill: "#FFFFFF", stroke: "#1abc9c", strokeWidth: 2, strokeMiterlimit: 10, }} d="M41.6,40.1h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7 C42.6,39.7,42.2,40.1,41.6,40.1z" /> <path id="XMLID_42_" className="st2" style={{ fill: "#FFFFFF", stroke: "#1abc9c", strokeWidth: 2, strokeMiterlimit: 10, }} d="M41.6,54.2h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7 C42.6,53.8,42.2,54.2,41.6,54.2z" /> <path id="XMLID_41_" className="st1" style={{ fill: "#1abc9c" }} d="M23.4,46.2l25,17.8c0.3,0.2,0.7,0.2,1.1,0l26.8-19.8l-3.3,30.9H27.7L23.4,46.2z" /> <path id="XMLID_40_" className="st3" style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeLinecap: "round", strokeMiterlimit: 10, }} d="M74.9,45.2L49.5,63.5c-0.3,0.2-0.7,0.2-1.1,0L23.2,45.2" /> </g> </g> </svg>
  );
};

const Confirm = () => {
  const { t } = useTranslation();

  return (
    <>
      <AuthLayout>
        <div className="mt-3 text-center">
          <Success />
          <h3>{t("Success !")}</h3>
          <p className="text-muted font-14 mt-2">
            {t("A email has been send to ")}
            <b>{t("youremail@domain.com")}</b>
            {t(
              ". Please check for an email from company and click on the included link to reset your password."
            )}
          </p>
          <Link
            className="btn w-100 btn-pink waves-effect waves-light mt-3"
            to="/auth/login"
          >
            {t("Back to Login")}
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default Confirm;
