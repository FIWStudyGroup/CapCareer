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
  singleJob!: Job;
  singleAnswer!: Answer;
  singleQuestion!: Question;
  id!: number;
  singleSkill!: Skill;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private formJob: FormBuilder
  ) { 
    this.form = this.formJob.group(
      {
        idControl: [this.id, Validators.required],
        refControl: ['', Validators.required],
        titleControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.readOneJob(this.id);
  }

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
