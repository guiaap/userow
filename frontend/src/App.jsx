import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AuthLayout />}>
          <Route path="register" element={<Register />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

 
