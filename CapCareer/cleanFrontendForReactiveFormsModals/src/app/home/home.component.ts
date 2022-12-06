import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../shared/backendanbindung.service';

import { Question } from '../shared/question';
import { Answer } from '../shared/answer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: string='';
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
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOneQuestion(this.id);
  }

  readOneQuestion(id: string): void {
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
