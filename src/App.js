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
import SubscriptionHistory from "./Pages/Subscription/SubscriptionHistory";
import AccountRoute from "./Pages/Account/AccountRoute";
import CommunityRoute from "./Pages/Community/CommunityRoute";
import CommunityPost from "./Pages/Community/Posts/CommunityPost";
import CommunityComments from "./Pages/Community/Posts/comments/CommunityComments";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Analytics />} />
        <Route path="product" element={<ProductTab />} />
        <Route path="account" element={<AccountRoute />}>
          <Route path="" element={<Account />} />
          <Route
            path=":userid/subscription/history"
            element={<SubscriptionHistory />}
          />
        </Route>
        <Route path="wallet" element={<WalletRoute />}>
          <Route path="" element={<Wallet />} />
          <Route path=":walletid/transaction" element={<WalletTransaction />} />
        </Route>
        <Route path="report" element={<Report />} />
        <Route path="bug" element={<SystemBug />} />
        <Route path="feedback" element={<SystemFeedback />} />
        <Route path="community" element={<CommunityRoute />}>
          <Route path="" element={<Community />} />
          <Route path=":postid/posts" element={<CommunityPost />} />
          <Route
            path=":postid/posts/:commentid/comments"
            element={<CommunityComments />}
          />
        </Route>
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
