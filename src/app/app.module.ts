import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    TimerViewComponent,
    AboutViewComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
