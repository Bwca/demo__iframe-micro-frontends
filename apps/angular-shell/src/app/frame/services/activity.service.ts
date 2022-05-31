import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivityItem } from '@demo--nx-iframe-microfrontends/models';

@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {
    this.getActivity().subscribe(console.log)
  }

  public getActivity(): Observable<ActivityItem> {
    const params = new HttpParams().set('participants', 1);
    return this.http.get<ActivityItem>(
      'http://www.boredapi.com/api/activity',
      {
        params,
      }
    );
  }
}
