import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {
  // src = "assets/images/newsletter/Newsletter February 2020.pdf";
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
