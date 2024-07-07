import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  AuthHeader: boolean = false;
  dashboardHeader: boolean = false;
  isMenuOpen: boolean = false;
  readonly panelOpenState = signal(false);
  
  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
