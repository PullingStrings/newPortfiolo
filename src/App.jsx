// src/App.jsx
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollToTop from '@/components/layout/ScrollToTop';
import DreamzoneCaseStudy from '@/pages/CaseStudies/DreamZone/DreamzoneCaseStudy';
import OffersFinanceCaseStudy from '@/pages/CaseStudies/OffersFinance/OffersFinanceCaseStudy';
import SamsungContactCaseStudy from '@/pages/CaseStudies/SamsungContact/SamsungContactCaseStudy';
import SamsungRepairCaseStudy from '@/pages/CaseStudies/SamsungRepair/SamsungRepairCaseStudy';
import CaseStudies from '@/pages/CaseStudyLanding/CaseStudies';
import Contact from '@/pages/Contact/Contact';
import Landing from '@/pages/Landing/Landing';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route
            path="/case-studies/volkswagen-dreamzone"
            element={<DreamzoneCaseStudy />}
          />
          <Route
            path="/case-studies/volkswagen-offers-finance"
            element={<OffersFinanceCaseStudy />}
          />
          <Route
            path="/case-studies/samsung-contact"
            element={<SamsungContactCaseStudy />}
          />
          <Route
            path="/case-studies/samsung-repair"
            element={<SamsungRepairCaseStudy />}
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
