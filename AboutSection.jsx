import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockStats } from '../mockData';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Image with Stat */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwYmlsbGluZ3xlbnwwfHx8fDE3NzIwMTYzOTB8MA&ixlib=rb-4.1.0&q=85"
              alt="Professional Team"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {mockStats.experience}
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-[150px]">
                  {mockStats.experienceDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Your Gateway to Digital Success</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Customized RCM Solutions for Every Practice & Providers
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Revolutionizing healthcare revenue cycle management, PracticeGrid Solutions offers tailored solutions for solo practitioners to pioneering telemedicine providers, enhancing efficiency and profitability.
            </p>
            <ul className="space-y-4">
              {[
                'Providers & Group Practices',
                'Virtual Clinics & Telehealth',
                'Billing Companies & MSOs',
                'EHRs & Healthcare Technology'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-6 group">
              Discover more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>

        {/* Secondary Image Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Innovative Solutions, Measurable Results</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Specialized Services
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive suite of services is designed to streamline your revenue cycle, reduce administrative burden, and maximize reimbursements.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Medical Office"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
