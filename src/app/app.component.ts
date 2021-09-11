import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { DialogComponent } from './components/dialog/dialog.component';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import * as doc from '../stub/doc-1.json';
import { SbEditComponent } from './components/sb-edit/sb-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {


  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    events: (doc as any).default,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(public dialog: MatDialog) { }

  @ViewChild(DialogComponent) child: DialogComponent;

  ngAfterViewInit() {

    console.log(this.child)
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    // const title = prompt('Please enter a new title for your event');
    // const calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   });
    // }

    this.dialog.open(DialogComponent, {
      width: '600px',
      data: {
        title: 'Add Appointment',
        addAppointment: true,
        dateSelected: selectInfo.view.currentStart,
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove();
    // }

    console.log(clickInfo.event)
    this.dialog.open(DialogComponent, {
      width: '600px',
      data: {
        title: 'Edit Appointment',
        editAppointment: true,
        selectedEvent: clickInfo.event
      }
    });

  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
