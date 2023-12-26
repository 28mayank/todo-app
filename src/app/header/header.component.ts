import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuth: HardcodedAuthService) {}

  ngOnInit(): void {
   // this.isUserLoggedIn = this.hardcodedAuth.isUserLoggedIn();
  }

}
