import { Component, OnInit } from '@angular/core';
import { Answer } from '../shared/answer';
import { BackendService } from '../shared/backendanbindung.service';
import { JobPost } from '../shared/JobPost';
import { Question } from '../shared/question';

@Component({
  selector: 'app-table',
  templateUrl: './table_jobs.component.html',
  styleUrls: ['./table_jobs.component.css']
})
export class TableComponent implements OnInit {
  jobposts!: JobPost[];
  questions!: Question[];
  answers!: Answer[];

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
      this.bs.getAllJobPosts().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
      (
        response: JobPost[]) => {
                this.jobposts = response;
                console.log(this.jobposts);
                return this.jobposts;
        },
        error => console.log(error)
      );
      this.bs.getAllQuestions().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
      (
        response: Question[]) => {
                this.questions = response;
                console.log(this.questions);
                return this.questions;
        },
        error => console.log(error)
      );
      this.bs.getAllAnswers().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
      (
        response: Answer[]) => {
                this.answers = response;
                console.log(this.answers);
                return this.answers;
        },
        error => console.log(error)
      );
    }
}
