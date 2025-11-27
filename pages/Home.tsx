import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://i.ibb.co/DgSGhMxW/Dynamic-RMC.jpg" 
               alt="Background" 
               className="w-full h-full object-cover animate-kenburns origin-center"
             />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering <span className="text-primary">Workforce</span> Excellence
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Welcome to Dynamic Recruitment and Management Consultancy Limited, your trusted partner in workforce development and organizational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition-colors">
                Explore Services
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://i.ibb.co/zWBQRDnC/Dynamic-RMC-1-1.jpg" 
                alt="Office Meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className="text-3xl font-bold text-textMain mt-2 mb-6">Redefining Recruitment & Consultancy in Nigeria</h2>
              <p className="text-textLight mb-6 leading-relaxed">
                Dynamic Recruitment and Management Consultancy Limited (DRMC Ltd.) is a Lagos-based human resource and management consultancy firm committed to bridging the gap between job seekers and employers.
                <br className="block mt-4" />
                We provide customized recruitment, training, and advisory solutions that help organizations attract, develop, and retain top talent.
              </p>
              <ul className="space-y-4 mb-8">
                {['Expert Recruitment Strategies', 'Tailored Corporate Training', 'Strategic Management Consulting'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-textMain font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read More About Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-textMain mb-4">Our Core Solutions</h2>
            <p className="text-textLight max-w-2xl mx-auto">
              We offer a comprehensive suite of services designed to meet the diverse needs of modern businesses and ambitious professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {SERVICES.slice(0, 3).map((service) => (
               <div key={service.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                 <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <div className="p-8 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                   <p className="text-textLight mb-6 line-clamp-3 flex-1">{service.shortDescription}</p>
                   <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wide group-hover:gap-3 transition-all">
                     Learn More <ArrowRight size={16} className="text-primary" />
                   </Link>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-gray-300 text-textMain px-6 py-3 rounded-md hover:bg-secondary hover:text-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your workforce?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and let us tailor a solution for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/apply/consultancy-request" className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
               Request Consultancy
             </Link>
             <Link to="/faq" className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
               Chat with Customer Care
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;