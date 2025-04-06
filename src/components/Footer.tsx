
import React from 'react';
import { Instagram, Twitter, Linkedin, GitHub } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-talent-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-talent-teal to-talent-purple rounded-full blur-sm"></div>
                <div className="absolute inset-0.5 bg-talent-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-talent-teal to-talent-purple">TN</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-talent-teal to-talent-purple">Talent Nexus AI</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered platform for matching tech talent with the perfect opportunities. Streamline your recruitment process with intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">
                <GitHub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">CV Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Job Matching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">AI Communications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Salary Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Project Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talent-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Talent Nexus AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-talent-teal text-sm transition-colors">Privacy Policy</a>
            <span className="text-gray-700 mx-2">•</span>
            <a href="#" className="text-gray-500 hover:text-talent-teal text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
