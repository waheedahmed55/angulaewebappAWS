import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  
  current = 0;
  // tslint:disable-next-line: variable-name
  img_list = [
    'assets/images/Who is the Caliph_1.jpg',
    'assets/images/Bismillah_w.png',
    'assets/images/logo.png',
  ];

  constructor() {}
  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }

  getSlider() {

    const slides = document.getElementsByClassName('mySlides');
    let myIndex = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = 'none';
    }

    setTimeout(() => {
      myIndex++;
      if (myIndex > slides.length) {myIndex = 1; }
    // tslint:disable-next-line: no-unused-expression
      const updatedSlide = slides[myIndex - 1] as HTMLElement;
      updatedSlide.style.display = 'block';
    }, 2000);


    setTimeout(() => {
      this.getSlider();
    }, 3000);

  }
  }
