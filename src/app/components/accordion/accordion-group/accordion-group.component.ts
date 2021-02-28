import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroupComponent  {



  /**
   * If the panel is opened or closed
   */
  // tslint:disable-next-line: member-ordering
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  // tslint:disable-next-line: member-ordering
  @Input() title: string;

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

}
