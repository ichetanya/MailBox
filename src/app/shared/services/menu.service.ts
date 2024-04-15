import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Draft, Flagged, Inbox, Sent, Trash } from 'src/app/configurations/menu-items';
import { folders } from '../mocked-data/mocked-folders';
import { Folder } from '../models/folder';
import { UserInfo } from '../models/user-info';
import { user } from '../mocked-data/mocked-user-info';


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
