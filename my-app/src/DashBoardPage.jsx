import * as React from "react";
import Button from "@mui/material/Button";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function DashBoard() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  function check() {
    if (!user) {
      navigate("/");
    }
  }

  useEffect(() => {
    check();
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const crud = () => {
    navigate("/crud");
  };

  return (
    <div>
      <div id="dashboard-body">
        <h1 id="dashboard-welcome">Welcome to dashboard {user?.email}</h1>
      </div>

      <div id="dashboard-signout">
        <div>
          <Button id="dashboard-button" onClick={crud}>
            CRUD
          </Button>
        </div>
        <div>
          <Button id="dashboard-button" onClick={logout}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
