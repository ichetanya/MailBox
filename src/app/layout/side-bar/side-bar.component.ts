import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConfiguration } from 'src/app/configurations/router-config';
import { Folder } from 'src/app/shared/models/folder';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { UserInfo } from 'src/app/shared/models/user-info';
import { MenuService } from 'src/app/shared/services/menu.service';

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
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuItems = this.menuService.getMenuItems();
    this.folders = this.menuService.getFolders();
  }

  ngOnInit(): void {
    this.currentUser = this.menuService.getUserDetails();
  }

  navigateToFolder(folder: Folder) {
    this.router.navigate([RouterConfiguration.folder, folder.label]);
  }
}
