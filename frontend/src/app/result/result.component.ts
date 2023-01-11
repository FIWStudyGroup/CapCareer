import { Job } from '../shared/job';
import { BackendService } from '../shared/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  jobs!: Job[];

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
    //this.readOneQuestion();
  }
  
  readAll(): void {
    this.bs.getAllJobs().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
    (
      response: Job[]) => {
              this.jobs = response;
              console.log(this.jobs);
              return this.jobs;
      },
      error => console.log(error)
    );
  }  
}
