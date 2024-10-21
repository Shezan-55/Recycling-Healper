import {React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Navbar } from "./Components/Navbar";
// import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import Display from "./Components/Display";
import Search from './Components/Search'; 
import Chatbot from "./Components/Chatbot";
import About from "./Components/About";
import Footer from "./Components/Footer";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      axios.get('http://localhost:3001/user', { withCredentials: true })
          .then(response => {
              if (response.data.user) {
                  setIsLoggedIn(true);
              } else {
                  setIsLoggedIn(false);
              }
          })
          .catch(() => setIsLoggedIn(false));
  }, []);

  return (
      <div>
          <BrowserRouter>
              <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/display" element={<Display />} /> 
                  <Route path="/chatbot" element={<Chatbot  />} /> 
                  <Route path="/about" element={<About  />} />
                  
              </Routes>
             < Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </BrowserRouter>
      </div>
  );
}

export default App;