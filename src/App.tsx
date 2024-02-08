// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";


import Auth from "./components/Auth/Auth";

import Crypto from "./components/Crypto/Crypto";



import Footer from "./globalSubComponents/Footer";
import { RootState } from "./store/store";
import Contact from "./components/Contact/Contact";


function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      {curTab === "Auth" ? null : <NavBar />}
      <Routes>
        {/* <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/FAQ" element={<FAQ />} /> */}
        
        {/* <Route path="/Investment" element={<Investment />} /> */}
        {/* <Route path="/Crypto" element={<Crypto />} /> */}
        {/* <Route path="/Options" element={<Options />} /> */}
        {/* <Route path="/Retirement" element={<Retirement />} /> */}
        {/* <Route path="*" element={<Navigate to="/Home" />} /> */}
      </Routes>
      {curTab === "Auth" ? null : <Footer />}
      
    </>
  );
}

export default App;
