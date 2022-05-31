import { useCallback, useState } from 'react';

import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

import { useActivityProvider } from '../use-activity-provider/use-activity-provider';

export function Activity() {
  const [activity, setActivity] = useState<ActivityItem | null>(null);
  const getActivity = useActivityProvider();
  const handleGetActivity = useCallback(
    () => getActivity().then(setActivity),
    [getActivity]
  );

  return (
    <div>
      <h3>Welcome to Activity!</h3>
      <button onClick={handleGetActivity}>get some activity!</button>
      {activity &&
        Object.entries(activity).map(([k, v]) => (
          <p key={k}>
            <strong>{k}</strong>: {v}
          </p>
        ))}
    </div>
  );
}
