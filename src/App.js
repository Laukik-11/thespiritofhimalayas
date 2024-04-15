import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TrekDetail from "./Pages/TrekDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/trek/:id" element={<TrekDetail />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
