import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Dashboard/Dashboard";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
