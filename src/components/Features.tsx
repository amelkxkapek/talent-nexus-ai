
import React from 'react';
import { FileCheck, MessageSquare, DollarSign, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileCheck className="h-8 w-8 text-talent-teal" />,
      title: 'CV & Job Matching',
      description: 'Upload CVs and job descriptions to get instant compatibility analysis with percentage match and detailed justification.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-talent-purple" />,
      title: 'AI-Powered Communication',
      description: 'Generate personalized messages for candidates and clients based on CV and job analysis.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-talent-teal" />,
      title: 'Salary Insights',
      description: 'Get accurate salary range suggestions based on location, skills, and experience level.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-talent-purple" />,
      title: 'Project Management',
      description: 'Organize projects and candidates with status tracking, notes, and automated follow-ups.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recruitment <span className="gradient-text">Supercharged</span> with AI
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform streamlines your recruitment process with powerful AI-driven tools designed specifically for tech talent acquisition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="mb-4 p-2 inline-block rounded-lg bg-gray-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
