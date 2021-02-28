import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ktabset',
  templateUrl: './ktabset.component.html',
  styleUrls: ['./ktabset.component.scss']
})
export class KtabsetComponent implements OnInit {
  currentOrientation = 'horizontal';
  constructor() { }

  ngOnInit(): void {
  }

}
