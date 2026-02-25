import React from 'react';
import { Check } from 'lucide-react';
import { mockFeatures } from '../mockData';
import { Button } from './ui/button';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-2xl">💵</span>
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide ml-2">Transparent Pricing Packages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Get a plan that grows with you
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature List */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc3MjAxNjM5OHww&ixlib=rb-4.1.0&q=85"
                alt="Features"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Feature List Tailored to Your Needs</h3>
            <ul className="space-y-4 mb-8">
              {mockFeatures.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6">
              Discuss your requirements!
            </Button>
          </div>

          {/* Methodology */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Methodology</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">Unveiling an Innovative Approach!</h3>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Comprehensive Solutions For</h4>
            <ul className="space-y-4 mb-8">
              {mockFeatures.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6">
              Hire us!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
