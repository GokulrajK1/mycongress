import db from "./firebase"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//Testing if working