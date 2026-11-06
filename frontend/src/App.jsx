import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

 
