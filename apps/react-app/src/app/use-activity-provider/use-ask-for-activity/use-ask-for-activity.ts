import { useEffect, useRef } from 'react';

import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

import { GetActivity } from '../../models/get-activity.model';
import { useActivityFromMessage } from './use-activity-from-message';

export function useAskForActivity(): GetActivity {
  const activity = useActivityFromMessage();

  const activityResolver = useRef<(activity: ActivityItem) => void>();

  useEffect(() => {
    if (activity) {
      activityResolver.current?.(activity);
    }
  }, [activity]);

  return (): Promise<ActivityItem> => {
    window.parent.postMessage(
      {
        message: 'plz give some activity, bro?',
      },
      '*'
    );
    return new Promise<ActivityItem>((res) => {
      activityResolver.current = res;
    });
  };
}
