import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer } from '../shared/answer';
import { BackendService } from '../shared/backend.service';
import { Job } from '../shared/job';
import { Question } from '../shared/question';
import { Skill } from '../shared/skill';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  questions!: Question[];
  id!: number;
  singleJob!: Job;
  answers!: Answer[]; // muss vermutlich mehrdimensional sein

  checkboxElems = document.querySelectorAll("input[type='checkbox']");



// Convert buttons NodeList to an array
  checkboxArr =  Array.from(this.checkboxElems); //Array.prototype.slice.call(this.checkboxElems);

/*
for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", funcName);
} */




  singleQuestion!: Question;
  singleSkill!: Skill;
  page = 0;
  answerNr = 0;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private questionForm: FormBuilder
  ) { 
    this.form = this.questionForm.group(
      {
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
    console.log(this.checkboxArr);
    console.log(this.page);
  }

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
