import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, ShieldCheck, Zap, Handshake, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  // Helper to get an icon based on value title
  const getValueIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'integrity': return <ShieldCheck size={28} />;
      case 'excellence': return <Star size={28} />;
      case 'professionalism': return <Users size={28} />;
      case 'innovation': return <Zap size={28} />;
      case 'collaboration': return <Handshake size={28} />;
      case 'empowerment': return <Target size={28} />;
      default: return <Star size={28} />;
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl font-bold mb-4">About Us</h1>
           <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      <div className="pb-20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="prose max-w-none text-gray-600 space-y-6 text-lg leading-relaxed">
              {COMPANY_INFO.about.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-red-50 rounded-xl transform rotate-2 opacity-50"></div>
              <img 
                src="https://i.ibb.co/DgSGhMxW/Dynamic-RMC.jpg" 
                alt="Corporate Office" 
                className="relative rounded-xl shadow-lg w-full object-cover h-full min-h-[400px]"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye size={120} />
              </div>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-primary text-white p-10 rounded-2xl shadow-lg border-t-4 border-red-900 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} />
              </div>
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-red-50 text-lg leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Culture</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Core Values</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                These principles guide every decision we make and every interaction we have with our clients and candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.values.map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      {getValueIcon(val.title)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{val.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;