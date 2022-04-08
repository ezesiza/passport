import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetAllPosts, SearchAction } from '../../actions/post.actions';
import { Post } from '../../models/post.model';
import { getCurrentQuery, selectFilteredItems, State } from '../../reducers';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  postsList: Post[];
  filterInputChange$ = new Subject<string>();
  filteredQueryPost$: Observable<Array<Post>>;

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.filterInputChange$
      .pipe(switchMap((text: string) => of(text)))
      .subscribe((text: string) => this.store.dispatch(new SearchAction(text)));

    this.filteredQueryPost$ = this.store.select(selectFilteredItems);
    this.store.dispatch(new GetAllPosts());
  }
}
