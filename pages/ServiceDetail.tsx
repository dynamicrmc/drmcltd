import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle, ArrowLeft, Calendar, ShieldCheck, Phone } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === serviceId);

  // Redirect if service not found, or show 404
  useEffect(() => {
    if (!service) {
      // For simplicity, we just navigate back to services, or you could render a 404 component
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link to="/services" className="text-gray-300 hover:text-white flex items-center gap-2 mb-4 transition-colors w-fit">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-secondary mb-6">Overview</h2>
              <p className="text-gray-600 leading-loose text-lg mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-xl font-bold text-secondary mb-4">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
               <h3 className="text-xl font-bold text-secondary mb-6">Key Benefits</h3>
               <div className="grid grid-cols-1 gap-4">
                 {service.benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center gap-4 border-l-4 border-primary pl-4 py-2">
                     <span className="text-gray-700 font-semibold">{benefit}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* CTA Card */}
            <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-8 text-red-100">
                Book this service today and let our team of experts handle the rest.
              </p>
              <Link 
                to="/book-service" 
                state={{ preSelectedService: service.title }}
                className="block w-full bg-white text-primary font-bold text-center py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book This Service
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> Why Choose DRMC?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We combine local expertise with global standards to deliver results that matter.
              </p>
              <div className="border-t border-gray-800 pt-6">
                 <p className="text-sm text-gray-400 mb-2">Need to talk first?</p>
                 <a href="tel:08034012264" className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                   <Phone size={18} /> 0803 401 2264
                 </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;