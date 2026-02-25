import React from 'react';
import { mockSoftwarePartners } from '../mockData';

const SoftwarePartners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Software Suits</h2>
          <p className="text-gray-600">Integrated with leading healthcare platforms</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {mockSoftwarePartners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md group"
            >
              <span className="text-gray-700 font-semibold text-sm text-center group-hover:text-blue-600 transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwarePartners;
