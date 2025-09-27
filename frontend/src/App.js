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

// ✅ Correct spelling matches your files
import AchievementsTeaser from "./components/AchievementsTeaser";
import Achievements from "./components/Achievements";
import FunFactsTeaser from "./components/FunFactsTeaser";
import FunFacts from "./components/FunFacts";

function App() {
  useEffect(() => {
    document.title = "Mahima Siddheshwar | Bioinformatics & QC Portfolio";
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Homepage with teasers */}
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
                {/* ✅ Make sure correct names are used here */}
                <AchievementsTeaser />
                <FunFactsTeaser />
                <Contact />
              </main>
            }
          />

          {/* Full Pages */}
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/funfacts" element={<FunFacts />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
