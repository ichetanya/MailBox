import { Injectable } from '@angular/core';
import { Draft, Flagged, Inbox, Sent, Trash } from 'src/app/configurations/menu-items';
import { folders } from '../mocked-data/mocked-folders';
import { user } from '../mocked-data/mocked-user-info';
import { Folder, MenuItem, UserInfo } from 'mailbox-common';


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

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getFolders(): Folder[] {
    return folders;
  }

  getUserDetails(): UserInfo {
    return user;
  }
}
