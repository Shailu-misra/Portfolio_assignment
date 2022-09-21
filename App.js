import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonial";
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
  );
}

export default App;


