// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import DreamzoneCaseStudy from "./pages/DreamzoneCaseStudy";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/volkswagen-dreamzone" element={<DreamzoneCaseStudy />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
