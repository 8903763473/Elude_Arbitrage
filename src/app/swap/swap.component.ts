import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Box {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss'],
})
export class SwapComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  boxes: Box[] = [
    { id: 1, title: 'Utility', content: 'SEND TOKEN' },
    { id: 2, title: 'Utility', content: 'RETURN FUND' },
    { id: 3, title: 'Aave V3', content: 'REPAY' },
    { id: 4, title: 'Aave V3', content: 'FALSHLOAN' }
  ];

  drop(event: CdkDragDrop<Box[]>) {
    moveItemInArray(this.boxes, event.previousIndex, event.currentIndex);
  }

}
