import "./App.css";
import AppNavbar from "./components/AppNavBar";
// Remove the import for startUp
// import startUp from "./components/StartUp";
import Addusers from "./components/AddUser1";
import Allusers from "./components/AllUsers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        {/* No need to use startUp */}
        <Route path="/" element={<div>Home</div>} />
        <Route path="/add" element={<Addusers />} />
        <Route path="/all" element={<Allusers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
