
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type SubscriptionStatus = 'free' | 'subscribed';

interface UseSubscriptionReturn {
  status: SubscriptionStatus;
  dailyUsageRemaining: number;
  isUsageLimitReached: boolean;
  useFreeTrial: () => void;
  subscribeNow: () => void;
}

export const useSubscription = (): UseSubscriptionReturn => {
  const [status, setStatus] = useState<SubscriptionStatus>(() => {
    const saved = localStorage.getItem('subscription-status');
    return saved === 'subscribed' ? 'subscribed' : 'free';
  });

  const [dailyUsageRemaining, setDailyUsageRemaining] = useState<number>(() => {
    const saved = localStorage.getItem('daily-usage-remaining');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [lastUsageDate, setLastUsageDate] = useState<string>(() => {
    return localStorage.getItem('last-usage-date') || '';
  });
  
  const { toast } = useToast();

  useEffect(() => {
    // Reset daily usage if it's a new day
    const today = new Date().toDateString();
    if (today !== lastUsageDate && status === 'free') {
      setDailyUsageRemaining(1);
      setLastUsageDate(today);
      localStorage.setItem('daily-usage-remaining', '1');
      localStorage.setItem('last-usage-date', today);
    }
  }, [lastUsageDate, status]);

  const useFreeTrial = () => {
    if (status === 'subscribed') {
      return;
    }

    if (dailyUsageRemaining > 0) {
      setDailyUsageRemaining(prev => {
        const newValue = prev - 1;
        localStorage.setItem('daily-usage-remaining', String(newValue));
        return newValue;
      });
      
      setLastUsageDate(new Date().toDateString());
      localStorage.setItem('last-usage-date', new Date().toDateString());
      
      if (dailyUsageRemaining === 1) {
        toast({
          title: "Daily limit reached",
          description: "You've used your free daily access. Subscribe for unlimited usage.",
          variant: "default"
        });
      }
    }
  };

  const subscribeNow = () => {
    // This would typically integrate with a payment processor
    // For this example, we'll just set the subscription status directly
    setStatus('subscribed');
    localStorage.setItem('subscription-status', 'subscribed');
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to ChainMatcher Premium!",
      variant: "default"
    });
  };

  return {
    status,
    dailyUsageRemaining,
    isUsageLimitReached: status === 'free' && dailyUsageRemaining <= 0,
    useFreeTrial,
    subscribeNow
  };
};
