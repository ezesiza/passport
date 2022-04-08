import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetCurrentQuery } from 'src/app/actions/post.actions';
import { getCurrentQuery } from 'src/app/reducers';

@Component({
  selector: 'filter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string = '';
  @Output() queryEvt = new EventEmitter<string>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(getCurrentQuery).subscribe((item: string) => {
      if (item.length > 0) {
        this.query = item;
      }
    });
  }

  handleQuery() {
    this.queryEvt.emit(this.query);
  }
}
