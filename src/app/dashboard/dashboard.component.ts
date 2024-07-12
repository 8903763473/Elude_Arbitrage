import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Chart, registerables } from 'chart.js';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
declare var jsPlumb: any;


Chart.register(...registerables);

export interface Box {
  width: number;
  height: number;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  popup: boolean = false;
  alertTransaction: boolean = false;
  deleteAll: boolean = false;
  TransactionSetting: boolean = false;
  AccountPop: boolean = false;
  availableWallet: boolean = false;
  Buycrypto: boolean = false;
  table: boolean = false;
  create: boolean = false;
  graphSection: boolean = false;
  create1: boolean = false;
  isMenuOpen: boolean = false;

  ELEMENT_DATA: any[] = [
    {
      position: 1,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    },
    {
      position: 2,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    },
    {
      position: 3,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    }, {
      position: 4,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    },
    {
      position: 5,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    },
    {
      position: 6,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    },
    {
      position: 7,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$60,841.50",
      "oneHour": "0.19%",
      "oneDay": "0.19%",
      "sevenDay": "0.19%",
      marketCap: "$1,221,957,356,378",
      volume24h: "$21,957,356,378,577 / 367,965 BTC",
      circulatingSupply: "367,965 BTC"
    }
  ];


  tableData = [
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    },
    {
      walletAddress: '0xB24BROU249R2RLK9PQR9Q9R',
      plan: 'Premium',
      subscriptionDate: '01/11/23',
      TransactionRun: '7',
      totalProfit: '$100'
    }
  ]

  categories = [
    {
      label: 'Utility',
      border: '1px solid rgb(181 7 90)',
      options: ['Send Token', 'Multi Send', 'Wrapped Native Token', 'Add Fund', 'Return Fund']
    },
    {
      label: 'Uniswap V3',
      border: '1px solid #999999',
      options: ['Swap Token', 'Multi Swap']
    },
    {
      label: 'Aave V3',
      border: '1px solid #0684F8',
      options: ['Supply Token', 'Withdraw', 'Borrow', 'Repay', 'Flashloan']
    },
    {
      label: 'Aave V2',
      border: '1px solid green',
      options: ['Deposit', 'Withdraw', 'Borrow', 'Repay', 'Flashloan']
    }
  ];

  @ViewChild('chartLine') chartLine?: ElementRef<HTMLCanvasElement> | any;

  TabledisplayedColumns: string[] = ['walletAddress', 'plan', 'subscriptionDate', 'transactionRun', 'totalProfit'];
  TabledataSource = new MatTableDataSource(this.tableData);

  displayedColumns: string[] = ['position', 'name', 'ticker', 'price', 'oneHour', 'oneDay', 'sevenDay', 'marketCap', 'volume24h', 'circulatingSupply'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort | null = null;

  selectedOptions: any = []
  avaliablealletPickedOption: any;

  @ViewChildren('box') boxes: QueryList<ElementRef> | any;

  constructor(public router: Router, public app: AppComponent, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit() {
    this.graphSection = true
    this.app.Footer = false;
    this.selectedOptions = []
    this.app.dashboardHeader = true;
    this.app.AuthHeader = false;
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    this.createLineChart();
  }

  OpenPopup() {
    this.popup = true;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // createBox(): void {
  //   if (this.boxTemplate && this.boxContainer) {
  //     const view: any = this.boxContainer.createEmbeddedView(this.boxTemplate);
  //     this.boxes.push(view);
  //     console.log('Box created. Total boxes:', this.boxes.length);
  //   } else {
  //     console.error('Box template or container is not available.');
  //   }
  // }

  createLineChart(): void {
    const ctx1: any = this.chartLine.nativeElement.getContext('2d');
    if (ctx1) {
      const gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
      gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');

      new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Income',
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0,
            borderColor: '#FFF',
            backgroundColor: gradientStroke1,
            data: [450, 300, 400, 350, 600, 450, 200, 300, 200, 550, 290, 450]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          },
          scales: {
            y: {
              grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: false
              },
              ticks: {
                display: true,
                padding: 10,
                color: '#fbfbfb',
                font: {
                  size: 11,
                  family: 'Open Sans',
                  style: 'normal',
                  lineHeight: 2
                }
              }
            },
            x: {
              grid: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false
              },
              ticks: {
                display: true,
                color: '#ccc',
                padding: 20,
                font: {
                  size: 11,
                  family: 'Open Sans',
                  style: 'normal',
                  lineHeight: 2
                }
              }
            }
          }
        }
      });
    } else {
      console.error('Unable to get context for canvas');
    }
  }

  afterChoosed(label: string, option: string) {
    if (option == 'Return Fund' || option == 'Repay') {
      this.popup = false;
      this.app.availableWallet = false;
      this.availableWallet = true;
      this.avaliablealletPickedOption = `${label}_${option}`
    } else {
      // this.initJsPlumb();
      this.popup = false;
      this.create1 = true
      this.availableWallet = false;
      this.selectedOptions.push(`${label}_${option}`)
    }
  }

  AvailavleWallet() {
    // this.initJsPlumb();
    this.selectedOptions.push(`${this.avaliablealletPickedOption}`);
    this.create1 = true;
    this.availableWallet = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  drop(event: CdkDragDrop<Box[]>) {
    moveItemInArray(this.selectedOptions, event.previousIndex, event.currentIndex);
  }

}
