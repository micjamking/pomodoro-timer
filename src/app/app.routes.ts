import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Views
import { TimerViewComponent } from './views/timer-view/timer-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/timer',
    pathMatch: 'full'
  },
  {
    path: 'timer',
    component: TimerViewComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutesModule { }
