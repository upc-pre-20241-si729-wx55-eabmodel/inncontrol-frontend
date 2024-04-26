import {Component} from '@angular/core';

import {Notification} from '../../model/notification-entity';
import {ThemePalette} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {NotificationsViewComponent} from "../notifications-view/notifications-view.component";

@Component({
  selector: 'app-notifications-badge',
  templateUrl: './notifications-badge.component.html',
  styleUrl: './notifications-badge.component.css'
})
export class NotificationsBadgeComponent {

  constructor(private dialog: MatDialog) {

  }

  notifications: Notification[] = [
    new Notification(new Date(), 'You have a new message', true),
    new Notification(new Date(), 'You have a new message'),
    new Notification(new Date(), 'You have a new message', true),
    new Notification(new Date(), 'You have a new message'),
    new Notification(new Date(), 'You have a new task'),
    new Notification(new Date(), 'You have a new task'),
    new Notification(new Date(), 'You have a new task'),
    new Notification(new Date(), 'You have a new task', true),
  ];

  getNotificationsQuantity(): number {
    return this.notifications.length;
  }

  getNiceNotificationsQuantity(): string {
    if (this.hasUnViewedNotifications()) {
      return this.getUnViewedNotifications().toString()
    }
    return '';
  }

  getUnViewedNotifications(): number {
    return this.notifications.filter(notification => !notification.viewed).length;
  }

  hasUnViewedNotifications(): boolean {
    return this.getUnViewedNotifications() > 0;
  }

  calculateBadgeColor(): ThemePalette {
    return this.getUnViewedNotifications() > 0 ? 'warn' : 'primary';
  }

  onOpenNotifications(): void {
    const dialogRef = this.dialog.open(
      NotificationsViewComponent,
      {
        data: this.notifications,
        autoFocus: false
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      // This is only for testing purposes it´s supposed to set viewed in backend.
      this.notifications.forEach(notification => notification.viewed = true);
    });
  }
}
