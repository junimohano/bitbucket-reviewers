import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ListBase } from './models/list-base.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() list: ListBase[];
  @Input() showDetail = false;
  @Output() clickItem = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
