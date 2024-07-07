import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  popup: boolean = false;

  constructor(public router: Router, public app: AppComponent) { }

  ngOnInit() {
    this.app.dashboardHeader = true;
    this.app.AuthHeader = false;
  }

  OpenPopup() {
    this.popup = true;
  }

}
