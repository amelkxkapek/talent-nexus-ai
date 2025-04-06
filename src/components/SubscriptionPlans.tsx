
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';

const SubscriptionPlans = () => {
  const { status, subscribeNow } = useSubscription();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with our free tier or unlock unlimited access with our premium subscription.
          </p>
        </div>

        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Free Trial</h3>
              <p className="text-gray-600 mb-4">For casual users</p>
              <div className="text-3xl font-bold mb-6">€0<span className="text-base font-normal text-gray-500">/month</span></div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> 1 Recruitment match per day
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> Basic CV analysis
              </li>
              <li className="flex items-center">
                <X size={18} className="text-gray-400 mr-2" /> Limited job descriptions
              </li>
              <li className="flex items-center">
                <X size={18} className="text-gray-400 mr-2" /> No advanced analytics
              </li>
            </ul>

            <Button variant="outline" className="w-full" disabled>
              Current Plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-talent-teal rounded-xl p-8 relative bg-white shadow-lg">
            <div className="absolute -top-4 right-4 bg-gradient-to-r from-talent-teal to-talent-purple text-white px-3 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">For serious recruiters</p>
              <div className="text-3xl font-bold mb-6">€40<span className="text-base font-normal text-gray-500">/month</span></div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> Unlimited recruitment matches
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> Advanced CV analysis
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> Unlimited job descriptions
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-talent-teal mr-2" /> Comprehensive analytics
              </li>
            </ul>

            {status === 'subscribed' ? (
              <Button className="w-full bg-gray-200 text-gray-700 cursor-not-allowed" disabled>
                Current Plan
              </Button>
            ) : (
              <Button 
                className="w-full bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90"
                onClick={subscribeNow}
              >
                Subscribe Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
