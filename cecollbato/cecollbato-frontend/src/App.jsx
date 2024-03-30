import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacte from "./pages/Contacte";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/Contacte" element={<Contacte />} />
        </Route>
        <Route path="*" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
