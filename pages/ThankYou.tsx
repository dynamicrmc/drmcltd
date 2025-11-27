import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const name = location.state?.name || 'there';

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg mx-4">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You, {name}!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Your submission has been received successfully. A member of the DRMC team will review your information and get back to you shortly.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
            Back Home
          </Link>
          <Link to="/services" className="text-secondary px-6 py-3 rounded-lg font-semibold border border-secondary hover:bg-gray-50 transition-colors">
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;