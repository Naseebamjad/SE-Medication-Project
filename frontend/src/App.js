import NavBar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Footer from "./components/footer";
import OurDoctors from "./components/ourDoctors";
import Articles from "./components/articles";
import ArticleDetail from "./components/article"
import BookAppointment from "./components/bookAppointment";
import Profile from "./components/profile";
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-doctors" element={<OurDoctors />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;