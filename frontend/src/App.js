import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FunFactsTeaser from "./components/FunFactsTeaser"; // ✅ teaser for homepage
import FunFacts from "./components/FunFacts"; // ✅ full gallery page

function App() {
  useEffect(() => {
    document.title = "Mahima Siddheshwar | Bioinformatics & QC Portfolio";
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Homepage with teaser */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Resume />
                <Blog />
                <FunFactsTeaser /> {/* ✅ teaser before Contact */}
                <Contact />
              </main>
            }
          />

          {/* Full Fun Facts Page */}
          <Route path="/funfacts" element={<FunFacts />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
