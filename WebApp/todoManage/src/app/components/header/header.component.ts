import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from 'src/app/modules/core/service/harcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDropdown: boolean = false;
  @Output() toggleSideNavEvent = new EventEmitter();

  constructor(
    private harcodedAuthenticationService: HarcodedAuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signOut(): void {
    this.harcodedAuthenticationService.removeSessionToLogOut();
    this.router.navigate(['accounts']);
  }
  toggleSideNav(): void {
    this.toggleSideNavEvent.emit({ toggle: true });
  }
}
