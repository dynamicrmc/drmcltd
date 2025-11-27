import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4">Our Services</h1>
          <p className="text-textLight max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive growth and efficiency for individuals and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 group">
              <div className="md:w-5/12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover min-h-[300px] transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-secondary mb-4">{service.title}</h2>
                <p className="text-textLight mb-6 text-lg">{service.shortDescription}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.details.slice(0, 4).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;