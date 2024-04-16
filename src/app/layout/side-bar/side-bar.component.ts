import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, Folder, UserInfo } from 'mailbox-common';
import { Subject, takeUntil } from 'rxjs';
import { RouterConfiguration } from 'src/app/configurations/router-config';
import { MenuService } from 'src/app/shared/services/menu.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuItems: MenuItem[];
  folders: Folder[];
  collapsed: boolean = false;
  currentUser: UserInfo;
  private destroy = new Subject<void>();
  isMobileDevice: boolean;
  sidebarCollapsed: boolean;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private screenService: ScreenSizeService
  ) {
    this.menuItems = this.menuService.getMenuItems();
    this.folders = this.menuService.getFolders();
  }

  /**
   * Fetches the details of logged in user and checks the media screen on which user is viewing.
   */
  ngOnInit(): void {
    this.currentUser = this.menuService.getUserDetails();
    this.screenService.size.pipe(
      takeUntil(this.destroy)
    ).subscribe(size => {
      if (size.width <= 860) {
        this.isMobileDevice = true;
        this.sidebarCollapsed = true;
      } else {
        this.isMobileDevice = false;
        this.sidebarCollapsed = false;
      }
    });
  }

  /**
   * Expands the sidebar.
   */
  openSidebar(): void {
    this.sidebarCollapsed = false;
  }

  /**
   * Closes the sidebar.
   */
  closeSidebar(): void {
    this.sidebarCollapsed = true;
  }

  /**
   * Navigates to Folder details page and passes folder name as a path parameter.
   * 
   * @param folder Selected Folder
   */
  navigateToFolder(folder: Folder) {
    this.router.navigate([RouterConfiguration.folder, folder.label]);
  }

  /**
   * Unsubscribes from the creenService.size Observable. 
   */
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
