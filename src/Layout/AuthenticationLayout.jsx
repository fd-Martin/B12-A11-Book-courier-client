import React from "react";
import { Outlet } from "react-router";
import LogoAuth from "../Components/Logo/LogoAuth";
const AuthenticationLayout = () => {
  return (
    <div className=" w-11/12 mx-auto md:flex items-center justify-center gap-20">
      <Outlet></Outlet>
      <LogoAuth></LogoAuth>
    </div>
  );
};

export default AuthenticationLayout;
