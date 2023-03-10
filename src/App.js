import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductTab from "./Pages/Product/ProductTab";
import Account from "./Pages/Account/Account";
import Analytics from "./Pages/Analytics/Analytics";
import Wallet from "./Pages/Wallet/Wallet";
import Report from "./Pages/Report/Report";
import SystemBug from "./Pages/SystemBug/SystemBug";
import SystemFeedback from "./Pages/SystemFeedback/SystemFeedback";
import Community from "./Pages/Community/Community";
import WalletTransaction from "./Pages/Wallet/WalletTransaction";
import WalletRoute from "./Pages/Wallet/WalletRoute";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Analytics />} />
        <Route path="product" element={<ProductTab />} />
        <Route path="account" element={<Account />} />
        <Route path="wallet" element={<WalletRoute />}>
          <Route path="" element={<Wallet />} />
          <Route path=":walletid/transaction" element={<WalletTransaction />} />
        </Route>
        <Route path="report" element={<Report />} />
        <Route path="bug" element={<SystemBug />} />
        <Route path="feedback" element={<SystemFeedback />} />
        <Route path="community" element={<Community />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
