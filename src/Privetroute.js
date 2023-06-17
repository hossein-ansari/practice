import React from "react";
import {islogin} from "./utils.js";
import { Outlet } from "react-router-dom";
import Panel from "./Panel";

import { Navigate } from "react-router-dom";
export default function Privetroute() {
  let login = islogin("adf");
    console.log(login);
  return <div>
     {login ? (<Outlet /> )  : <Navigate to={"./Posts"} />}
     </div>;
}
