import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Registration from './pages/Registration';
import MailConfim from './pages/MailConfim';
import UploadPassport from './pages/UploadPassport';
import ApplicationFinish from './pages/ApplicationFinish';
import Dashboard from './pages/Dashboard'
import Verify from './pages/Verify'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/registration/:id" element={<Registration/>} />
          <Route path="/mailConfirm" element={<MailConfim/>} />
          <Route path="/uploadPassport/:id" element={<UploadPassport/>} />
          <Route path="/application/:id" element={<ApplicationFinish/>} />
          <Route path="/dashboard"element={<Dashboard/>} />
          <Route path="/dashboard/home"element={<Home/>} />
          <Route path="/verify/:id/:token" element={<Verify />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
