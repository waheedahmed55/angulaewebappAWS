import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
inputData = {};
  constructor() {

    this.inputData = [
      // tslint:disable-next-line: max-line-length
      {title: 'Gym', description: 'The Size of Gym is 200 Sqft and its Single Gym.The Gym is designed to play 1 sport at time. Gym has proper stage and can be used for bigger events' },
      // tslint:disable-next-line: max-line-length
      {title: 'Prayer Hall', description: 'Prayer Hall capcity is 200 people of normal size.It has arrangment of audio/video and seating for elederly people' },
      // tslint:disable-next-line: max-line-length
      {title: 'Kitchen', description: 'The kitchen is professional industrial level fully equppied with 16 burner range, 2 single burner, double and signle sink, and cooler.' },
        
      {title: 'Library', description: 'The kitchen is professional industrial level fully equppied with 16 burner range, 2 single burner, double and signle sink, and cooler.' }
        ];
   }

  ngOnInit(): void {
  }

}
