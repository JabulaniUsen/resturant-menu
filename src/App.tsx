import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import UserMenu from "./components/UserMenu";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/menu" element={<UserMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
