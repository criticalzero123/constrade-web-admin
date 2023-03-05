import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductTab from "./Pages/Product/ProductTab";
import Account from "./Pages/Account/Account";
import Analytics from "./Pages/Analytics/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Analytics />} />
        <Route path="product" element={<ProductTab />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
