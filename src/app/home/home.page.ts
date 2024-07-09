import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public app: AppComponent) { }

  ngOnInit() {
    this.app.Footer = true;
    this.app.AuthHeader = true;
    this.app.dashboardHeader = false;
  }
}
