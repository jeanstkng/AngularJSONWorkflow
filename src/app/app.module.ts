import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowOneComponent } from './workflow-one/workflow-one.component';
import { WorkflowTwoComponent } from './workflow-two/workflow-two.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowOneComponent,
    WorkflowTwoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
