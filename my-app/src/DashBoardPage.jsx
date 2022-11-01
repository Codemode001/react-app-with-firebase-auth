import * as React from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase-config";

export default function DashBoard() {
  const [user, setUser] = React.useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div id="dashboard-body">
        <h1 id="dashboard-welcome">Welcome to dashboard {user?.email}</h1>
      </div>
      <div id="dashboard-signout">
        <Button id="dashboard-button" onClick={logout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
