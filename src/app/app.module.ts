import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GridComponent } from './components/grid/grid.component';
import { MaterialModule } from './material.module';
import { MatRadioModule } from '@angular/material/radio';
import { SbAdditionComponent } from './components/sb-addition/sb-addition.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    GridComponent,
    SbAdditionComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule ,
    MatDialogModule,
    MaterialModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
   ],
  providers: [],
  entryComponents: [AppComponent, DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
