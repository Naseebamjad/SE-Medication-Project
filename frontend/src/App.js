import NavBar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Footer from "./components/footer";
import OurDoctors from "./components/ourDoctors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-doctors" element={<OurDoctors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;