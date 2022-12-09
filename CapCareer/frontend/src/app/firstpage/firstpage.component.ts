import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
 page = 1;

  constructor() { }

  ngOnInit(): void {

  }
  quizPageNumber(){

    this.page++;
  }
}
