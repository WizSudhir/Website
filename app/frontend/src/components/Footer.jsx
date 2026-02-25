import React, { useState } from 'react';
import { Download, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleDownloadRequest = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Document shall be emailed after approval. Thank You!",
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Download Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <Download className="h-16 w-16 mx-auto text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Download our business proposal</h2>
            <form onSubmit={handleDownloadRequest} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                Get Download Link!
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Document shall be emailed after approval. Thank You!
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_6e520e7a-d1e0-4d09-9568-7c982d29dad4/artifacts/gjxqlbch_Long%20Logo.png" 
              alt="PracticeGrid Solutions" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 max-w-md">
              Streamlining your revenue cycle for success. PracticeGrid Solutions is a leading healthcare IT company, specializing in revenue cycle management, dedicated to optimizing revenue with innovative solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(347) 503-7017</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@practicegridsolutions.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Friday</p>
            <p className="text-gray-400">9:00 AM - 6:00 PM EST</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 PracticeGrid Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
