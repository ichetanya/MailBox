import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Draft, Flagged, Inbox, Sent, Trash } from 'src/app/configurations/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = [
    Inbox,
    Flagged,
    Draft,
    Sent,
    Trash
  ];

  getMenuItems() : MenuItem[] {
    return this.menuItems;
  }
}
