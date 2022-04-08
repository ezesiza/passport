import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input()
  posts: any = [];
  constructor() {}

  ngOnInit() {}
}
