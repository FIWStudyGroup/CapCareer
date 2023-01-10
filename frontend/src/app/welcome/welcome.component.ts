import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{



  show = false;

  ngOnInit(): void {
    
  }

  showQuestionnaire() {
    this.show = true;
  }

  



}
