
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import MatchAnalysis from '@/components/MatchAnalysis';
import SalaryInsights from '@/components/SalaryInsights';
import BatchProcessing from '@/components/BatchProcessing';
import CandidateClientMatch from '@/components/CandidateClientMatch';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import UsageLimitAlert from '@/components/UsageLimitAlert';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UsageLimitAlert />
        <Features />
        <HowItWorks />
        <MatchAnalysis />
        <BatchProcessing />
        <SalaryInsights />
        <CandidateClientMatch />
        <SubscriptionPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
