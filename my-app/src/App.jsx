import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignInSide from "./SignIn";
import Hello from "./DashBoardPage";
import SignUp from "./SignUpPage";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInSide />} />
        <Route exact path="/dashboard" element={<Hello />} />
        {/* <Route
            path="/dashboard"
            element={<PrivateRoute component={Hello} />}
          /> */}
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}
export default App;
