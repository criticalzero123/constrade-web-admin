import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import SignIn from "./views/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
