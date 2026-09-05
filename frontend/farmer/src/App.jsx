import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProduce from "./pages/AddProduce";
import Centres from "./pages/Centres";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/farmer/centres"
  element={<Centres />}
/>
        <Route path="/register" element={<Register />} />
        <Route
  path="/farmer/add-produce"
  element={<AddProduce />}
/>
        <Route path="/farmer/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;