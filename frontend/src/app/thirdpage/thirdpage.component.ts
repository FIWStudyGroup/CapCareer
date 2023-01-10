import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; //formbuilder importieren

import { BackendService } from '../shared/backend.service'; //service importieren

import { Question } from '../shared/question';
import { Answer } from '../shared/answer';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html', 
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {
  singleQuestion!: Question;
  singleAnswer!: Answer;
  questions!: Question[];
  answers!: Answer[];


  questionAnswerForm = this.formBuilder.group ({
    question: '',
    answer: ''    
  })
  

///////////////////////////////////////////////////////
/*   id!: number;
  
  showMe!: boolean;
  list!: any[]; */

  constructor(
    // inject service and formbuilder
    private beService: BackendService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    
  }

  getQuestionsAnswers(): void {

    this.beService.getAllQuestions().subscribe(
      (
      response: Question[]) => {
        this.questions = response;
        console.log(this.questions);        
        return this.questions;
      },
      (      error: any) => console.log(error)
    );

    this.beService.getAllAnswers().subscribe(
      (
      response: Answer[]) => {
        this.answers = response;
        console.log(this.answers);        
        return this.answers;
      },
      (      error: any) => console.log(error)
    );
    } 

  onSubmit(): void {
    

  }

/*   increaseId() {
    this.id++;
  }
  decreaseId() {
    this.id--;
  } */


}
