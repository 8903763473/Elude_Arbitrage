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
  Footer: boolean = false;
  readonly panelOpenState = signal(false);


  popup: boolean = false;
  alertTransaction: boolean = false;
  deleteAll: boolean = false;
  TransactionSetting: boolean = false;
  AccountPop: boolean = false;
  availableWallet: boolean = false;
  Buycrypto: boolean = false;
  table: boolean = false;

  setting: boolean = false;
  Delete: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  iconClicked(data: any) {
    localStorage.setItem(data, 'true');
  }

}
