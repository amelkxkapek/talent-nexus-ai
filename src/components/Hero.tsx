
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, BarChart } from 'lucide-react';
import { useSubscription } from '@/hooks/use-subscription';

const Hero = () => {
  const { useFreeTrial, status } = useSubscription();

  const handleUploadClick = () => {
    useFreeTrial();
    // Additional logic for CV upload would go here
  };

  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-talent-teal/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-talent-purple/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Match <span className="gradient-text">Talent</span> with<br />
              Opportunities Using <span className="gradient-text">AI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Upload CVs and job descriptions to instantly analyze compatibility, generate communication, and manage your recruitment pipeline.
              {status !== 'subscribed' && " Free users get one match per day."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-talent-teal to-talent-purple text-white px-8 py-6 rounded-lg hover:opacity-90"
                size="lg"
                onClick={handleUploadClick}
              >
                Upload CV
                <FileText className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 border-2 hover:bg-gray-50"
              >
                How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            {status !== 'subscribed' && (
              <p className="text-sm text-gray-500 mt-4">
                Free tier: 1 match per day. <span className="text-talent-purple font-medium">Subscribe for €40/month</span> for unlimited access.
              </p>
            )}
          </div>

          {/* Floating 3D diagram illustration */}
          <div className="flex-1 relative">
            <div className="w-full max-w-md h-72 relative">
              {/* Main center panel */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 glass-card p-4 flex flex-col items-center justify-center text-center animate-float z-20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-talent-teal to-talent-purple flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm">Talent Matching</h3>
                <p className="text-xs text-gray-500 mt-1">AI-powered recruitment</p>
              </div>

              {/* CV Panel */}
              <div className="absolute left-0 top-1/3 w-36 h-36 glass-card p-3 flex flex-col items-center justify-center text-center animate-float animation-delay-200 z-10">
                <div className="w-10 h-10 rounded-full bg-talent-teal flex items-center justify-center mb-2">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-sm">CV Analysis</h3>
                <p className="text-xs text-gray-500 mt-1">Extract key skills</p>
              </div>

              {/* Analytics Panel */}
              <div className="absolute right-0 top-1/3 w-36 h-36 glass-card p-3 flex flex-col items-center justify-center text-center animate-float animation-delay-400 z-10">
                <div className="w-10 h-10 rounded-full bg-talent-purple flex items-center justify-center mb-2">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-sm">Insights</h3>
                <p className="text-xs text-gray-500 mt-1">Data-driven decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
