import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public app: AppComponent) { }

  ngOnInit() {
    this.app.AuthHeader = true;
    this.app.dashboardHeader = false;
  }

  goRegister() {
    this.router.navigate(['/register'])
  }
}
