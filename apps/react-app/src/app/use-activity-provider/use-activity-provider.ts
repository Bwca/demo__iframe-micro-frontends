import { GetActivity } from '../models/get-activity.model';
import { fetchActivity } from './fetch-activity.util';
import { useAskForActivity } from './use-ask-for-activity/use-ask-for-activity';

export function useActivityProvider(): GetActivity {
  const askForActivity = useAskForActivity();
  const isStandaloneApplication = window.location === window.parent.location;

  return isStandaloneApplication ? fetchActivity : askForActivity;
}
