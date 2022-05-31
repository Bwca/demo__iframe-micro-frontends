import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

export interface GetActivity {
  (): Promise<ActivityItem>;
}
