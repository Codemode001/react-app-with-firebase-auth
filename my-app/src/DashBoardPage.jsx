import * as React from "react";
import "./styles.css";
import Button from "@mui/material/Button";

export default function DashBoard() {
  return (
    <div>
      <div id="dashboard-body">
        <h1 id="dashboard-welcome">Welcome to dashboard name</h1>
      </div>
      <div id="dashboard-signout">
        <Button id="dashboard-button">Sign Out</Button>
      </div>
    </div>
  );
}
