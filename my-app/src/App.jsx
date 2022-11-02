import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignInSide from "./SignIn";
import Hello from "./DashBoardPage";
import SignUp from "./SignUpPage";
import ManageUsers from "./Crud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/crud" element={<ManageUsers />} />
        <Route path="/dashboard" element={<Hello />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;
