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

  /**
   * Returns menu list which will be displayed in the sidebar
   */
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  /**
  * Returns the list of available folders
  */
  getFolders(): Folder[] {
    return folders;
  }

  /**
   * Returns current user's detail. 
   */
  getUserDetails(): UserInfo {
    return user;
  }
}
