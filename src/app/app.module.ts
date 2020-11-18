import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameBoardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCO6rDTp-t-B-DMEFjWlvIYW9n5mqpnUUs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
