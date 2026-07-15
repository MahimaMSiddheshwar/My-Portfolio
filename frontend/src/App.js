import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

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

// Blog pages
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

// ✅ Scroll handler
import ScrollToTop from "./components/ScrollToTop";

// Scroll-triggered fade/slide reveal
import Reveal from "./components/Reveal";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Resume /></Reveal>
        <Reveal><Blog /></Reveal>
        <Reveal><AchievementsTeaser /></Reveal>
        <Reveal><FunFactsTeaser /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

function AchievementsPage() {
  return (
    <>
      <Header />
      <Achievements />
      <Footer />
    </>
  );
}

function FunFactsPage() {
  return (
    <>
      <Header />
      <FunFacts />
      <Footer />
    </>
  );
}

function BlogListPage() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}

function BlogDetailPage() {
  return (
    <>
      <Header />
      <BlogDetail />
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Mahima Siddheshwar | Bioinformatics & QC Portfolio";
  }, []);

  return (
    <>
      {/* 🔹 THIS LINE FIXES SCROLL ISSUE */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/funfacts" element={<FunFactsPage />} />

        {/* Blog routes */}
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </>
  );
}
