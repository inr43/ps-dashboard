import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Message, MessageService } from 'primeng/api';

import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {ToolbarModule} from 'primeng/toolbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { ProjectformComponent } from './projectform/projectform.component';
import { ProjectService } from './services/project.service';
import { ResourceAddComponent } from './resource-add/resource-add.component';

const UX_MODULE = [    
  ButtonModule,
  AccordionModule,
  ToolbarModule,
  AutoCompleteModule,
  InputTextModule,
  InputTextareaModule,
  CalendarModule,
  ToastModule,
  TableModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectComponent,
    ProjectformComponent,
    ResourceAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...UX_MODULE
  ],
  providers: [ProjectService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
