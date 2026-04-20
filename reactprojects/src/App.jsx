import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import Verify from "./Pages/Verify";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/profile";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h2>hello</h2>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;