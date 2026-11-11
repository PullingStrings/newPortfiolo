// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { featuredProjectsById } from '@/data/homepage';
import DreamzoneCaseStudy from '@/pages/CaseStudies/DreamZone/DreamzoneCaseStudy';
import OffersFinanceCaseStudy from '@/pages/CaseStudies/OffersFinance/OffersFinanceCaseStudy';
import SamsungContactCaseStudy from '@/pages/CaseStudies/SamsungContact/SamsungContactCaseStudy';
import SamsungRepairCaseStudy from '@/pages/CaseStudies/SamsungRepair/SamsungRepairCaseStudy';
import CaseStudies from '@/pages/CaseStudyLanding/CaseStudies';
import Contact from '@/pages/Contact/Contact';
import Landing from '@/pages/Landing/Landing';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route
          path={featuredProjectsById.dreamzone.caseStudyPath}
          element={<DreamzoneCaseStudy />}
        />
        <Route
          path={featuredProjectsById.finance.caseStudyPath}
          element={<OffersFinanceCaseStudy />}
        />
        <Route
          path={featuredProjectsById.contact.caseStudyPath}
          element={<SamsungContactCaseStudy />}
        />
        <Route
          path={featuredProjectsById.repair.caseStudyPath}
          element={<SamsungRepairCaseStudy />}
        />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
