import { useState, useCallback, useEffect } from 'react';

import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

export function useActivityFromMessage(): ActivityItem | null {
  const [activity, setActivity] = useState<ActivityItem | null>(null);

  const logMessage = useCallback((event: { data: ActivityItem }) => {
    setActivity(event.data);
  }, []);

  useEffect(() => {
    window.addEventListener('message', logMessage);
    return () => {
      window.removeEventListener('message', logMessage);
    };
  }, [logMessage]);

  return activity;
}
