import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef, Input, ViewChild,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, startOfHour, differenceInMinutes,
} from 'date-fns';
import {Subject} from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {EventColor} from 'calendar-utils';

const colors: Record<string, EventColor> = {
  "red": {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  "blue": {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  "yellow": {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .scroll-container {
        height: calc(100vh - 320px);
        overflow-y: auto;
      }
    `,
  ],
})
export class ScheduleViewComponent implements AfterViewInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();


  @Input() canChangeView: boolean = true;

  @Input() view: CalendarView = CalendarView.Month;

  @Input() activeDayIsOpen: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {
  }


  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: {...colors["red"]},
      allDay: true,
      // resizable: {
      //   beforeStart: true,
      //   afterEnd: true,
      // },
      // draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: {...colors["yellow"]},
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: {...colors["blue"]},
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: {...colors["yellow"]},
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },

    // event from 5pm to 6pm
    {
      title: 'Event 1',
      start: addHours(startOfDay(new Date()), 3),
      end: addHours(startOfDay(new Date()), 12),
      color: colors["red"],
      allDay: false,
    },
  ];

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) || events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd,
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('Event action:', action, event);
    // this.modalData = {event, action};
    // this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors["red"],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngAfterViewInit(): void {
    this.scrollToCurrentView();
  }

  viewChanged() {
    this.cdr.detectChanges();
    this.scrollToCurrentView();
  }

  private scrollToCurrentView() {
    if (this.view === CalendarView.Week || CalendarView.Day) {
      // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
      const headerHeight = this.view === CalendarView.Week ? 60 : 0;
      this.scrollContainer.nativeElement.scrollTop =
        minutesSinceStartOfDay + headerHeight;
    }
  }
}
