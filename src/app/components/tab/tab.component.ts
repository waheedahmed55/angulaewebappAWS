import { Component, OnInit, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnChanges {

  @Input() inputData: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
if(changes.inputData && changes.inputData.currentValue){
  this.inputData = changes.inputData.currentValue;
  this.getTab();
}
  }

  getTab() {
      const coll = document.getElementsByClassName('collapsible');

    // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < coll.length; i++) {
        const slide = coll[i] as HTMLElement;
        slide.addEventListener('click', function() {
          this.classList.toggle('active');
        //  const content = this.nextElementSibling as ElementRef;
          if (slide.style.maxHeight) {
            slide.style.maxHeight = null;
          } else {
            slide.style.maxHeight = slide.scrollHeight + 'px';
          }
        });
    }

  }
}
