import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import SignInSide from "./SignIn";
import DashBoard from "./DashBoardPage";
import SignUp from "./SignUpPage";
import ManageUsers from "./Crud";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route
            path="/crud"
            element={
              <ProtectedRoute>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
export default App;
