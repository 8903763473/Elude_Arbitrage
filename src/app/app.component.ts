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

  deleteAction() {
    localStorage.setItem('clickedIcon', '');
    this.deleteAll = false;
  }

  SettingAction() {
    localStorage.setItem('clickedIcon', '');
    this.TransactionSetting = false;
  }

  iconAction(data: any) {
    if (data == 'setting') {
      this.availableWallet = false;
      this.TransactionSetting = true;
      this.deleteAll = false;
    } else {
      this.availableWallet = false;
      this.TransactionSetting = false;
      this.deleteAll = true;
    }
  }

  AvailavleWallet() {
    this.availableWallet = false;
  }

  openAvailavleWallet() {
    console.log('vijay');
    this.TransactionSetting = false;
    this.deleteAll = false;
    this.availableWallet = true;
  }

}
