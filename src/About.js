import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Page</h1>
      <Link style={{margin : '2rem'}} to={"setting"}>Setting</Link>
      <Link to={"dashboard"}>Dashboard</Link>
      <Outlet />
    </div>
  );
}
