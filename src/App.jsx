import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AnimatedCard from "./components/AnimatedCard";
import Projects from "./components/ProjectCard";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Projects/>
      <Resume/>
      <ContactPage/>
      <Footer/>
    </div>
  );
};

export default App;
