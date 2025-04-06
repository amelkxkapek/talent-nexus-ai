
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-talent-teal to-talent-purple p-10 md:p-16 text-white">
          {/* Abstract shapes in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Tech Recruitment?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join forward-thinking recruiters who are leveraging AI to find the perfect match between talent and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-talent-purple hover:bg-gray-100 px-8 py-6" size="lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
