import { GetActivity } from '../models/get-activity.model';
import { fetchActivity } from './fetch-activity.util';

export function useActivityProvider(): GetActivity {
  return fetchActivity;
}
