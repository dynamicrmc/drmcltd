import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                <p className="text-gray-600">{COMPANY_INFO.contact.address}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                {COMPANY_INFO.contact.emails.map((email, index) => (
                  <a 
                    key={index} 
                    href={`mailto:${email}`} 
                    className="text-gray-600 hover:text-primary transition-colors block break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-primary">
                <Phone size={24} />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                {COMPANY_INFO.contact.phones.map((phone, index) => (
                  <a 
                    key={index} 
                    href={`tel:${phone}`} 
                    className="text-gray-600 hover:text-primary transition-colors block"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

             <div className="bg-white p-8 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-lg text-green-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                <a 
                  href={`https://wa.me/234${COMPANY_INFO.contact.whatsapp.substring(1)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors block"
                >
                  {COMPANY_INFO.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-xl shadow-sm h-[500px] overflow-hidden">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.356784814770757!3d6.524784795279698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5a5a5a5a5a%3A0x0!2zNsKwMzEnMjkuMiJOIDPCsDIxJzMyLjMiRQ!5e0!3m2!1sen!2sng!4v1626180000000!5m2!1sen!2sng" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="DRMC Location"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;