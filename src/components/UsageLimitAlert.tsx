
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { 
  Alert,
  AlertTitle,
  AlertDescription 
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';

const UsageLimitAlert = () => {
  const { isUsageLimitReached, subscribeNow } = useSubscription();

  if (!isUsageLimitReached) return null;

  return (
    <Alert className="mb-6 border-talent-purple/50 bg-talent-purple/10">
      <AlertTriangle className="h-5 w-5 text-talent-purple" />
      <AlertTitle className="text-talent-purple font-medium">
        Daily Limit Reached
      </AlertTitle>
      <AlertDescription className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span>
          You've used your free daily access. Subscribe to our premium plan for unlimited usage.
        </span>
        <Button 
          className="bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90 whitespace-nowrap"
          onClick={subscribeNow}
        >
          Subscribe for €40/month
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default UsageLimitAlert;
