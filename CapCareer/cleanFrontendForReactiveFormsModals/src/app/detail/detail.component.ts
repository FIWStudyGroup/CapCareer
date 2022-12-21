import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../shared/backendanbindung.service';

import { Question } from '../shared/question';
import { Answer } from '../shared/answer';

@Component({
  selector: 'app-home',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: number;
  question!: Question;
  form: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location
  ) 
  {
    this.form = this.fb.group(
      {
        questionControl: ['', Validators.required],
        // surnameControl: ['', Validators.required],
        // emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.id = 2;
    this.readOneQuestion(this.id);
  }

  readOneQuestion(id: number): void {
    this.bs.getOneQuestion(id).subscribe(
    (
      response: Question) => {
              this.question = response;
              console.log(this.question);
              return this.question;
      },
      (      error: any) => console.log(error)
    );
}

cancel(): void {
  this.location.back();
}
}
