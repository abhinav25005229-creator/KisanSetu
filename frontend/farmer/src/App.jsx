import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProduce from "./pages/AddProduce";
import Centres from "./pages/Centres";
import Recommendation from "./pages/Recommendation";
import SlotBooking from "./pages/SlotBooking";
import Token from "./pages/Token";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/farmer/token"
  element={<Token />}
/>
        <Route
  path="/farmer/recommendation/:centreId"
  element={<Recommendation />}
/>
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
<Route
  path="/farmer/slot-booking/:centreId"
  element={<SlotBooking />}
/>

        <Route path="/farmer/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;