import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';
import { Question } from './question';
import { Skill } from './skill';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.baseUrl + 'job_post_wizard');
  }
  getAllQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.baseUrl + 'question');
  }
  getAllAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>(this.baseUrl + 'answer');
  }

  getAllSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseUrl + 'skill');
  }


  getOneJob(id: number): Observable<Job>{
    return this.http.get<Job>(this.baseUrl + 'job/id' + id);
  }

  getOneQuestion(id: number): Observable<Question>{
    return this.http.get<Question>(this.baseUrl + 'question/id' + id);
  }

  getOneAnswer(id: number): Observable<Answer>{
    return this.http.get<Answer>(this.baseUrl + 'answer/id' + id);
  }

  getOneSkill(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.baseUrl + 'skill/id' + id);
  }
  
}
