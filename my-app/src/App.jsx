import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from "./SignIn";
import Hello from "./DashBoardPage";
import SignUp from "./SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/dashboard" element={<Hello />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
