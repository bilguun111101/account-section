import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Account } from "./Account/Account";

const RoutesSection = () => {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default RoutesSection;
