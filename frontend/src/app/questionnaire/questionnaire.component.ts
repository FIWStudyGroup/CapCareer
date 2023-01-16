import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../shared/backend.service';

import { CurrentQuestionnaire } from '../shared/current_questionnaire';
import { CurrentQuestion } from '../shared/current_question';
import { CurrentAnswer } from '../shared/currentAnswer';
//import { Answer } from '../shared/answer';

//import { Question } from '../shared/question';
//import { Skill } from '../shared/skill';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  form!: FormGroup; // 
  questionnaire!: CurrentQuestionnaire[]; // question-Array mit aktuellem Fragenkatalog
  questionnaireA!: CurrentAnswer[];
  currentQuestion!: CurrentQuestion;
  currentAnswer!: CurrentAnswer;
  page = 0;
  answerNr = 0; 
  anzFragen! : number;
  id!: number; // Variable für IDs

  //answers!: Answer[];
  //singleQuestion!: Question;
  //singleSkill!: Skill;


  show: boolean = false;

  

  constructor(
    //private route: ActivatedRoute,
    private bs: BackendService,
    private builder: FormBuilder
  ) 
  { 
    this.form = this.builder.group(
      {
        questionControl: ['', Validators.required],
        answerControl: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.getQuestionnaireQ();
    this.getQuestionnaireA();      
  }

   getQuestionnaireQ(): void {

      this.bs.getCurrentQuestionnaireQuestionsText().subscribe(
        (
        response: CurrentQuestion[]) => {
          this.questionnaire = response;
          this.anzFragen = this.questionnaire.length; 
          console.log(this.questionnaire);          
          return this.questionnaire;
        },
        error => console.log(error)
      );
   } 



   getQuestionnaireA(): void {
    this.bs.getCurrentQuestionnaireAnswersText().subscribe(
      (
      response: CurrentAnswer[]) => {
        this.questionnaireA = response;
        console.log(this.questionnaireA);
        return this.questionnaireA;
      }
    );
  } 



  showQuestionnaire() {
    // hier Bedingung einbauen??
    this.show = true;
  }

}
