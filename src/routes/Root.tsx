import React from "react";
import { Navigate } from "react-router-dom";

// import { APICore } from '../helpers/api/apiCore';

const Root = () => {
  // const api = new APICore();

  const getRootUrl = () => {
    let url: string = "/dashboard-1";

    // // check if user logged in or not and return url accordingly
    // if (api.isUserAuthenticated() === false) {
    //     url = 'landing';
    // } else {
    //     url = 'dashboard-1';
    // }
    return url;
  };

  const url = getRootUrl();

  return <Navigate to={`/${url}`} />;
};

export default Root;
