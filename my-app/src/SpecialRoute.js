import { Login } from "../pages/Login";
import { useAuth } from "../firebase-config";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from '../firebase-config';

export const SpecialRoute = () => {
  const user = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
};
