import db from "./firebase"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//Testing if working