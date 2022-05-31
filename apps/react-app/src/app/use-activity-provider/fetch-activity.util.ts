import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

export async function fetchActivity(): Promise<ActivityItem> {
  const result = await fetch('http://www.boredapi.com/api/activity/');
  if (result.status === 200) {
    return result.json();
  }
  throw new Error('somethign went wrong');
}
