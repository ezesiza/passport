import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  postId: any = '';

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postId = id;
  }
}
