
import React from 'react';
import { FileUp, Search, MessageCircle, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="h-8 w-8 text-white" />,
      title: 'Upload Documents',
      description: 'Upload candidate CVs (.pdf/.docx) and job descriptions to the platform.',
      bgColor: 'bg-talent-teal'
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: 'AI Analysis',
      description: 'Our AI extracts key information and performs compatibility matching.',
      bgColor: 'bg-talent-purple'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: 'Generate & Manage',
      description: 'Generate personalized communications and manage your recruitment pipeline.',
      bgColor: 'bg-talent-teal'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three simple steps to revolutionize your tech recruitment process
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 max-w-xs mx-auto">
                <div className={`${step.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center">
                  <ChevronRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
