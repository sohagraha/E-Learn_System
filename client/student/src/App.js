import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/registration/Registration";
import Footer from "./components/footer/Footer";
import InstructorDashboard from "./pages/instrucrorDashboard/InstructorDashboard";
import CreateCourse from "./pages/createCourse/CreateCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/instructor_dashboard" element={<InstructorDashboard />} />
        <Route path="/create_course" element={<CreateCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
