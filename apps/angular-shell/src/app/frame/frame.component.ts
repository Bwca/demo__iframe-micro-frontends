import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { MessageService } from './services/message.service';

@Component({
  template: `<iframe
    #childWindow
    [src]="iframeUrl"
    width="400px"
    height="400px"
  ></iframe>`,
  providers: [MessageService],
})
export class FrameComponent implements AfterViewInit {
  @ViewChild('childWindow')
  public readonly iframe!: ElementRef<HTMLIFrameElement>;

  public readonly iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    environment.iframeUrl
  );

  constructor(
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) {}

  public ngAfterViewInit(): void {
    this.messageService.target = this.iframe;
  }

  @HostListener('window:message', ['$event'])
  private message(event: MessageEvent) {
    this.messageService.requestActivity(event);
  }
}
