import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router, public app: AppComponent) { }

  ngOnInit() {
    this.app.Footer = false;
    this.app.AuthHeader = true;
    this.app.dashboardHeader = false;
  }

  goLogin() {
    this.router.navigate(['/login'])
  }

}
