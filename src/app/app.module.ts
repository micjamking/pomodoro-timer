import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { AppRoutesModule } from './app.routes';

// Views
import { AppComponent } from './views/app-view/app.component';
import { TimerViewComponent } from './views/timer-view/timer-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerToggleComponent } from './components/timer-toggle/timer-toggle.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

// Services
import { TimerService } from './services/timer/timer.service';
import { HistoryService } from './services/history/history.service';

// Pipes
import { DashToSpacePipe } from './pipes/dash-to-space/dash-to-space.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerViewComponent,
    AboutViewComponent,
    SidebarComponent,
    HistoryComponent,
    SettingsComponent,
    TimerComponent,
    ActionButtonsComponent,
    TimerToggleComponent,
    DashToSpacePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [
    Title,
    TimerService,
    HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
