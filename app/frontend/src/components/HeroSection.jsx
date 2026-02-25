import React, { useState, useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const HeroSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "We truly appreciate your request. We shall get in touch with you soon!",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                Advanced Billing Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              PracticeGrid focused on{' '}
              <span className="inline-flex items-baseline">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">E</span>
                <span className={`ml-1 w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              From inception to implementation, we offer billing solutions that make a difference. Your practice will thrive with our innovative services.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                Get Invited!
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">HIPAA Compliance</h3>
                  <p className="text-xs text-gray-600 mt-1">You are in safe hands</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Handled by Professionals</h3>
                  <p className="text-xs text-gray-600 mt-1">We're always here to help</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 rounded-lg">
                <h3 className="font-bold text-2xl">500K+</h3>
                <p className="text-sm mt-1 opacity-90">Total transactions per month</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NzIwMTYzODZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Healthcare Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
