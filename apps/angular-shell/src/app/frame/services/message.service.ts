import { Injectable, ElementRef, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription, switchMap } from 'rxjs';

import { ActivityService } from './activity.service';

@Injectable()
export class MessageService implements OnDestroy {
  private incomingMessage$$ = new Subject<MessageEvent>();
  private targetWindow: ElementRef<HTMLIFrameElement> | null = null;
  private subscription: Subscription | null = null;

  constructor(private activityService: ActivityService) {
    this.subscribeToMessages();
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public set target(targetWindow: ElementRef<HTMLIFrameElement>) {
    this.targetWindow = targetWindow;
  }

  public requestActivity(event: MessageEvent): void {
    this.incomingMessage$$.next(event);
  }

  private subscribeToMessages(): void {
    this.subscription = this.incomingMessage$$
      .pipe(
        debounceTime(100),
        switchMap(() => this.activityService.getActivity())
      )
      .subscribe((v) => {
        this.targetWindow?.nativeElement.contentWindow?.postMessage(v, '*');
      });
  }
}
