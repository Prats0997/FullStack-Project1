
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from 'src/app/modules/core/service/harcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDropdown: boolean = false;
  constructor(private harcodedAuthenticationService: HarcodedAuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void{
    this.harcodedAuthenticationService.removeSessionToLogOut();
    this.router.navigate(['accounts']);
  }

}
