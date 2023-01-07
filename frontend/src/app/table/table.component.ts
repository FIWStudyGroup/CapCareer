import { Component, OnInit } from '@angular/core';
import { Answer } from '../shared/answer';
import { BackendService } from '../shared/backend.service';
import { Job } from '../shared/job';
import { Question } from '../shared/question';
import { Skill } from '../shared/skill';
import { CurrentQuestionnaire } from '../shared/current_questionnaire';
import { CurrentQuestion } from '../shared/current_question';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  jobs!: Job[];
  questions!: Question[];
  questionnaire!: CurrentQuestionnaire[];
  currentQuestion!: CurrentQuestion;
  answers!: Answer[];
  singleQuestion!: Question;
  id!: number;
  skills!: Skill[];

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
      this.bs.getAllQuestions().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
      (
        response: Question[]) => {
                this.questions = response;
                console.log(this.questions);
                return this.questions;
        },
        error => console.log(error)
      );
      this.bs.getCurrentQuestionnaireQuestionsText().subscribe(
        (
        response: CurrentQuestionnaire[]) => {
          this.questionnaire = response;
          console.log(this.questionnaire);
          return this.questionnaire;
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
      this.bs.getAllSkills().subscribe( // subscribe-arguments sollen iregdnwie anders angegeben werden, lässt sich auf Anhieb aber nicht auf dieses Problem anwenden
      (
        response: Skill[]) => {
                this.skills = response;
                console.log(this.skills);
                return this.skills;
        },
        error => console.log(error)
      );    
    }

    readOneQuestion(): void {
      
      this.bs.getOneQuestion(this.id).subscribe(
        (
          response: Question) => {
            this.singleQuestion = response;
            console.log(this.singleQuestion);
            return this.singleQuestion;
        },
        error => console.log(error)
      );
    }


}
