import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  menuItems : MenuItem[];
  folders : MenuItem[];
  collapsed: boolean = false; 
  constructor( 
    private menuService: MenuService
  ) {
    this.menuItems = this.menuService.getMenuItems()
    this.folders = []
  } 
}
