import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TrekDetail from "./Pages/TrekDetail";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route path="/trek/:id" element={<TrekDetail />} /> */}
          {/* <Route path="/tour/:id" element={<TrekDetail />} /> */}
          <Route path="/:tourortrek/:id" element={<TrekDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
        <Footer />
        <a
          target="_blank"
          href="https://wa.me/916396539672"
          class="whatsapp-button"
        >
          <i class="fa fa-whatsapp"></i>
        </a>
        <a target="_blank" href="tel:916396539672" class="phone-button">
          <i class="fa fa-phone"></i>
        </a>
      </Router>
    </>
  );
}

export default App;
