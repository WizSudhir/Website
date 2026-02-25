import React from 'react';
import { Layers, Code, Send, AlertCircle, DollarSign, TrendingUp, UserCheck, BarChart3, ArrowRight } from 'lucide-react';
import { mockServices } from '../mockData';
import { Button } from './ui/button';

const iconMap = {
  Layers,
  Code,
  Send,
  AlertCircle,
  DollarSign,
  TrendingUp,
  UserCheck,
  BarChart3
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Innovative Solutions, Measurable Results</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Specialized Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-gray-800 hover:bg-gray-750 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 border border-gray-700 hover:border-blue-500/50 group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <Icon className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group/link transition-colors duration-200">
                  Know more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
            View all Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
