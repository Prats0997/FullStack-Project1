import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NAV_MENU } from '../app/constants/app-constants';
import { HarcodedAuthenticationService } from './modules/core/service/harcoded-authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isShowing: boolean = false;
  @ViewChild('sidenav', { static: false }) sidenav?: ElementRef;
  menuItems: any[] = NAV_MENU.MENU_ITEMS;

  constructor(
    public router: Router,
    private harcodedAuthenticationService: HarcodedAuthenticationService
  ) {}
  ngOnInit(): void {
    this.harcodedAuthenticationService.removeSessionToLogOut();
    const activeMenu = this.menuItems[0].subMenus.find(
      (eachSubMenu: any) => eachSubMenu?.id === 1
    );
    this.activateSubMenu(activeMenu);
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
  toggleSideNavMethod(resp: { toggle: boolean }): void {
    if (resp?.toggle === true) {
      this.toggleSidenav();
    }
  }

  activateSubMenu(subMenuItem: any): void {
    this.menuItems.forEach((eachMenu: any) => {
      eachMenu?.subMenus?.forEach((subMenuele: any) => {
        if (subMenuele?.id == subMenuItem?.id) {
          subMenuele.status = true;
        } else {
          subMenuele.status = false;
        }
      });
    });
  }
}
