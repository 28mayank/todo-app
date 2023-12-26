import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  invalidUser: boolean = false;
  errorMessage: string = 'Invlaid User';

  constructor(private router: Router,
    private hardcodedAuth: HardcodedAuthService
  ) { }

  ngOnInit(): void {}

  handleLogin() {
    if (this.hardcodedAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidUser = true;
    }

    console.log(this.username);
  }
}
