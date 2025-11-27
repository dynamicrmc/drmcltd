import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building2, GraduationCap } from 'lucide-react';

const Apply: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4">Application Portal</h1>
          <p className="text-textLight max-w-2xl mx-auto">
            Select the category that best fits your needs to proceed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Job Seekers */}
          <Link to="/apply/job-application" className="group">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-primary transition-colors h-full flex flex-col items-center">
              <div className="w-20 h-20 bg-red-50 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-secondary mb-2">Job Applicants</h2>
              <p className="text-textLight text-sm">Submit your CV and apply for open positions.</p>
            </div>
          </Link>

          {/* Organizations */}
          <Link to="/apply/consultancy-request" className="group">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-primary transition-colors h-full flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-50 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Building2 size={32} />
              </div>
              <h2 className="text-xl font-bold text-secondary mb-2">Organizations</h2>
              <p className="text-textLight text-sm">Request recruitment or consultancy services for your company.</p>
            </div>
          </Link>

          {/* Training */}
          <Link to="/apply/training-registration" className="group">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-primary transition-colors h-full flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-xl font-bold text-secondary mb-2">Training</h2>
              <p className="text-textLight text-sm">Register for upcoming workshops and training sessions.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Apply;