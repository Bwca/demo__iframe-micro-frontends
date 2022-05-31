import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FrameComponent } from './frame.component';
import { ActivityService } from './services/activity.service';

const routes: Routes = [{ path: '', component: FrameComponent }];

@NgModule({
  declarations: [FrameComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [ActivityService]
})
export class FrameModule {}
