import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Answer } from '../shared/answer';
import { BackendService } from '../shared/backend.service';
import { Job } from '../shared/job';
import { Question } from '../shared/question';
import { Skill } from '../shared/skill';
import { CurrentQuestionnaire } from '../shared/current_questionnaire';
import { CurrentQuestion } from '../shared/current_question';
import { CurrentAnswer } from '../shared/currentAnswer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class DetailComponent implements OnInit {



  form!: FormGroup; // 
  questionnaire!: CurrentQuestionnaire[]; // question-Array mit aktuellem Fragenkatalog



  questionnaireA!: CurrentAnswer[];
  currentQuestion!: CurrentQuestion;
  currentAnswer!: CurrentAnswer;
  page = 0;
  answerNr = 0; 
  anzFragen!: number;

  id!: number; // Variable für IDs
  singleJob!: Job;
  answers!: Answer[];
  singleQuestion!: Question;
  singleSkill!: Skill;

  checkboxElems = document.querySelectorAll("input[type='checkbox']");
// Convert buttons NodeList to an array
  checkboxArr =  Array.from(this.checkboxElems); //Array.prototype.slice.call(this.checkboxElems);

/*
for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", funcName);
} */

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private questionForm: FormBuilder
  ) { 
    this.form = this.questionForm.group(
      {
        questionnaireControl: [this.questionnaire],
        currentQuestionControl: [this.currentQuestion],
        questionControl: [this.singleQuestion],
        answersControl: [this.answers],
        idControl: [this.id, Validators.required],
        refControl: ['', Validators.required],
        titleControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required]

      }
    );
  }

  ngOnInit(): void {
    this.getQuestionnaireQ();   
     
  }

   getQuestionnaireQ(): void {
      this.bs.getCurrentQuestionnaireQuestionsText().subscribe(
        (
        response: CurrentQuestion[]) => {
          this.questionnaire = response;
          console.log(this.questionnaire);
          this.anzFragen = this.questionnaire.length;
          return this.questionnaire;
        },
        error => console.log(error)
      );
      

  } 

  // Funktioniert nicht, wahrscheinlich sind all die questions, answers und questionnaires auch Quatsch
  // besser versuchen, weniger Interfaces usw.?
  // Außerdem fehlt: wie werden Answers ins Modal geladen (zur aktuellen sequence passend, möglichst auch mit unterschiedlich vielen answers)

/*   getQuestionnaireA(): void {
    this.bs.getCurrentQuestionnaireAnswersText().subscribe(
      (
      response: this.CurrentAnswer[]) => {
        this.questionnaireA = response;
        console.log(this.questionnaireA);
        return this.questionnaireA;
      }
    );
  } */



  quizPageNumber(){
    this.page++;
    
  }




/*
bei Aufruf: leeres Array erzeugen, in dem die Antworten gespeichert werden
checkbox der gewählten Antwort meldet zurück: ich bin ausgewählt
[(1, 2), ...]
Fkt. muss (1. die Nummer der Frage und) 2. die Nr der Antwort speichern
*/ 

  readOneJob(id: number): void {
      this.bs.getOneJob(id).subscribe(
      (
        response: Job) => {
                this.singleJob = response;
                console.log(this.singleJob);
                return this.singleJob;
        },
        error => console.log(error)
      );
  }

}
