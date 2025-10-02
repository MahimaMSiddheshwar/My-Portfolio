import React, { useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

import AchievementsTeaser from "./components/AchievementsTeaser";
import Achievements from "./components/Achievements";
import FunFactsTeaser from "./components/FunFactsTeaser";
import FunFacts from "./components/FunFacts";

import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";

// ✅ Define routes (React Router v7 style)
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Resume />
          <Blog />
          <AchievementsTeaser />
          <FunFactsTeaser />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </>
    ),
  },
  {
    path: "/achievements",
    element: (
      <>
        <Header />
        <Achievements />
        <Footer />
      </>
    ),
  },
  {
    path: "/funfacts",
    element: (
      <>
        <Header />
        <FunFacts />
        <Footer />
      </>
    ),
  },
  {
    path: "/insights",
    element: (
      <>
        <Header />
        <Insights />
        <Footer />
      </>
    ),
  },
  {
    path: "/insights/:id",
    element: (
      <>
        <Header />
        <InsightDetail />
        <Footer />
      </>
    ),
  },
]);

function App() {
  useEffect(() => {
    document.title = "Mahima Siddheshwar | Bioinformatics & QC Portfolio";
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
