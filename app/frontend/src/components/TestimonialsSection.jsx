import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockTestimonials } from '../mockData';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  };

  const currentTestimonial = mockTestimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">How Clients React!</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            See how we've helped our clients succeed
          </h2>
          <p className="text-gray-600 mt-4 text-lg">PracticeGrid Solutions trusted by numerous agencies.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Carousel */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {currentTestimonial.company}
              </h3>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {currentTestimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">By {currentTestimonial.name}</p>
                <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {mockTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHx8fDE3NzIwMTY0MDN8MA&ixlib=rb-4.1.0&q=85"
                alt="Healthcare Professionals"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
