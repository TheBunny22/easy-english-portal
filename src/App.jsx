import React from "react";
import Navbar from "./components/navbar";
import "@fontsource/inter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DragGame from "./components/Games";
import BlanksGame from "./components/Games/BlanksGame";
import Profile from "./components/Profile";
import JoySignInSideTemplate from "./components/Login";
import Registration from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="/game" element={<DragGame />} />
          <Route path="/fill_the_blanks" element={<BlanksGame />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<JoySignInSideTemplate />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
