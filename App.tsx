import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import ChatBot from './pages/ChatBot';
import ThankYou from './pages/ThankYou';
import { JobForm, ConsultancyForm, TrainingForm, BookingForm } from './pages/Forms';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-textMain">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            
            {/* Forms */}
            <Route path="/apply/job-application" element={<JobForm />} />
            <Route path="/apply/consultancy-request" element={<ConsultancyForm />} />
            <Route path="/apply/training-registration" element={<TrainingForm />} />
            <Route path="/book-service" element={<BookingForm />} />
            
            <Route path="/faq" element={<ChatBot />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;