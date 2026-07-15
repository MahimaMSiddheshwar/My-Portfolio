import React, { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href) => {
    if (location.pathname === "/") {
      // Already on homepage → just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage and pass target section
      navigate("/", { state: { target: href } });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.target) {
      const element = document.querySelector(location.state.target);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
        : "bg-slate-900/80"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 gap-4">
          {/* Wordmark */}
          <button
            onClick={() => handleNavigation("#home")}
            className="hero-name-gradient font-mono text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap"
          >
            MS_
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-emerald-400 px-1 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-slate-700"></div>

            <div className="flex items-center gap-4">
              {/* Fun Facts link */}
              <Link
                to="/funfacts"
                className="text-slate-400 hover:text-emerald-400 text-xs font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Fun Facts
              </Link>

              {/* Bioinformatic Insights site link */}
              <a
                href="https://bioinformatics-insights.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 text-xs font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
              >
                Insights Hub
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Resume button */}
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              {/* Fun Facts */}
              <Link
                to="/funfacts"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 whitespace-nowrap"
              >
                Fun Facts
              </Link>

              {/* Bioinformatic Insights site link */}
              <a
                href="https://bioinformatics-insights.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-emerald-400 flex items-center gap-1 px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 whitespace-nowrap"
              >
                Insights Hub
                <ExternalLink size={14} />
              </a>

              {/* Resume */}
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 flex items-center gap-2 mt-2"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
